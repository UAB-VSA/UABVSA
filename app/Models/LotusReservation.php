<?php

namespace App\Models;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

/**
 * App\Models\LotusReservation
 * @property int                             $id
 * @property string                          $holder_type
 * @property string                          $name
 * @property string                          $email
 * @property int                             $tickets
 * @property string|null                     $dietary
 * @property string|null                     $accommodations
 * @property int                             $charged_price
 * @property int                             $pending
 * @property string|null                     $stripe_payment_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation query()
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereAccommodations($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereChargedPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereDietary($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereHolderType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation wherePending($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereStripePaymentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereTickets($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LotusReservation whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class LotusReservation extends Model
{

    use HasFactory;

    protected $fillable = [
        'holder_type',
        'name',
        'email',
        'tickets',
        'dietary',
        'accommodations',
        'charged_price',
        'pending',
        'stripe_payment_id',
    ];

    public static function acceptingNewReservations ()
    {
        return nova_get_setting('lotus_allow_new_reservations');
    }

    public static function countReservedTickets ()
    {
        return static::sum('tickets');
    }

    public static function countConfirmedReservedTickets ()
    {
        return static::where('pending', false)->sum('tickets');
    }

    public static function isSoldOut ()
    {
        return static::countReservedTickets() >= nova_get_setting('lotus_ticket_capacity');
    }

    public static function remainingTickets ()
    {
        return nova_get_setting('lotus_ticket_capacity') - static::countReservedTickets();
    }

    public static function createPendingReservation (array $data): LotusReservation
    {
        return static::create(array_merge($data, [
            'pending' => TRUE,
        ]));
    }

    public function isPending ()
    {
        return $this->pending;
    }

    public function isNotPending (): bool
    {
        return !$this->isPending();
    }

    public function markAsPaid (string $paymentId, int $amount): void
    {
        $this->update([
            'pending'           => FALSE,
            'stripe_payment_id' => $paymentId,
            'charged_price'     => $amount,
        ]);
    }

    public function markAsNotPending (): void
    {
        $this->update([
            'pending' => FALSE,
        ]);
    }

    public function isStudent ()
    {
        return $this->holder_type === 'student';
    }

    public function generateQRCode ()
    {
        return QrCode::format('png')
                     ->errorCorrection('H')
                     ->size(250)
                     ->style('round')
                     ->gradient(239, 68, 68, 225, 29, 72, 'radial')
                     ->backgroundColor(238, 238, 238)
                     ->generate("LOTUSRESERVATION{$this->id}");
    }

    public function generatePDF ()
    {
        return Pdf::loadView('lotus.pdf.ticket', [ 'reservation' => $this ])
                  ->setOption('defaultFont', 'Mukta');
    }
}