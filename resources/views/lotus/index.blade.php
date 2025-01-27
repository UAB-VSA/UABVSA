@php use App\Models\LotusReservation; @endphp
@extends('lotus.layout')

@section('title', 'Lotus Under the Lights')

@section('content')
    <div class="landing w-screen h-screen min-h-screen bg-green-800">
        {{-- If the site is being hosted over expose.dev we don't want to load the video because it'll be too large --}}
        @unless(str_ends_with(request()->getHost(), 'sharedwithexpose.com'))
            <video
                class="h-screen w-screen object-cover"
                autoplay muted loop src="/media/background_video.webm"></video>
        @endunless

        <div class="h-full w-full flex flex-col px-5 z-10 absolute top-0 container-xl mx-auto pt-40">
            <div>
                <h3 class="text-white text-center text-2xl mb-5">The Vietnamese Student Association at UAB™ presents</h3>
                <h1 class="font-['Cinzel_Decorative'] text-white text-center text-5xl lg:text-8xl font-light" x-target="letter-effect">Lotus Under the Lights
                    <span class="text-yellow-400">3</span></h1>
                <p class="text-white text-center md:text-xl max-w-3xl max-w-prose mx-auto mt-5 md:mt-0">
                    This year’s Lotus 3 theme goes along with the motto <span class="text-yellow-300">“Where We Belong”</span> centering friendship and self-identity. While a family is something you’re born in, your best friends are your own chosen home. Through thick and thin, one can find themselves supported by those they cherish with whatever life throws at them.
                </p>
            </div>
        </div>

        <div class="flex justify-center absolute bottom-[100px] z-20 w-full">
            <a href="#reserve" class="decoration-0 bg-yellow-400 hover:bg-zinc-800 text-zinc-800 hover:text-yellow-400 font-black rounded-3xl px-8 py-3 inline-block font-['Cinzel_Decorative'] space-x-5 tracking-widest text-base transition-all duration-300">Reserve A Ticket</a>
        </div>
    </div>

    <section class="bg-zinc-900 text-neutral-200">
        <div class="container mx-auto px-5 lg:px-10 py-32">
            <div class="flex flex-col lg:flex-row flex-wrap w-100 content-center">
                <div class="lg:w-2/3 lg:pr-10 mb-5 lg:mb-0">
                    <h1 class="text-yellow-400 font-['Cinzel_Decorative'] text-6xl font-bold mb-2">About LUTL</h1>
                    <div class="h-[2px] w-full bg-yellow-300 grad-1 rounded my-5"></div>
                    <p class="text-lg lg:text-xl">
                        With our first show in 2019, Lotus Under the Lights has become one UAB VSA’s most anticipated events
                        on campus and has continued to grow into an extravagant celebration of the Vietnamese New Year, Tét.
                    </p>
                    &nbsp;
                    <p class="text-lg lg:text-xl">
                        Our team of Lotus directors and committees dedicate months of work into developing our culture show,
                        turning simple visions and ideas into an exciting reality. Taking on a different theme every year, our
                        annual culture show aims to showcase all sides of Vietnamese culture and history to our audience ranging
                        from traditional fan and lion dance performances, engaging original skits, and cultural food catered
                        by local restaurants.
                    </p>
                    &nbsp;
                    <p class="text-lg lg:text-xl">
                        Overall, our show provides a large platform to promote UAB VSA’s mission–sharing our culture with our
                        campus. This year’s Lotus Under the Lights is set to take place on Saturday, February 18th, 2023.
                    </p>
                </div>
                <div class="lg:w-1/3 lg:pl-10">
                    <img src="{{ url('media/lotus/image_1.jpg') }}" alt="Lotus Under the Lights">
                </div>
            </div>
        </div>
    </section>

    <section class="bg-green-900 flex justify-center flex-col lg:flex-row flex-wrap pt-48 lg:pb-24 lg:px-8 xl:px-32">

        <div class="flex-grow w-full lg:w-1/3 text-white lg:pr-2 mb-5 lg:mb-0">
            <h1 class="text-5xl text-center lg:text-left lg:text-6xl font-['Cinzel_Decorative'] font-bold tracking-widest mb-5">Reserve Tickets</h1>
            <div class="px-5 xl:px-0">
                <span class="bg-yellow-400 rounded-2xl text-green-800 px-4 font-bold tracking-widest uppercase lg:mr-1 inline-block my-1">$7/ea</span>
                <span class="bg-yellow-400 rounded-2xl text-green-800 px-4 font-bold tracking-widest uppercase lg:ml-1 inline-block my-1">free for student / faculty<sup>*</sup></span>
            </div>
            <div class="mt-5 space-y-1 px-5 xl:px-0">
                <p>
                    UAB student / faculty tickets are available for all UAB-affiliated students, faculty, and staff with a valid BlazerID.
                    Each UAB email address is limited to only ONE ticket.
                </p>
{{--                <p class="pl-3"><strong>Tickets remaining for UAB Student / Faculty</strong>: {{ LotusReservation::remainingStudentTickets() }}</p>--}}
                <small>* Limit 1 ticket per student</small>
            </div>
            <div class="mt-5 space-y-2 px-5 xl:px-0">
                <p>
                    General attendee tickets are sold for $7 each. General attendees are allowed to purchase up to 3 tickets per
                    email address.
                </p>
                <p class="italic">Please note that if you purchase multiple tickets, your full party MUST be present to check in with you.</p>
{{--                <p class="pl-3"><strong>Tickets remaining for General Admission</strong>: {{ LotusReservation::remainingGeneralTickets() }}</p>--}}
            </div>
            <div class="mt-5 space-y-2 px-5 xl:px-0">
                <p>
                    The first 150 attendees in line at check-in will receive a free food voucher.
                </p>
            </div>
            <div class="mt-5 space-y-1 px-5 xl:px-0">
                <a href="#" class="flex flex-row align-center underline text-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Hill Student Center at UAB
                </a>
                <p class="flex flex-row align-center text-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Saturday, February 18th, 2023 - 6:00 PM
                </p>
            </div>
        </div>

        <div class="flex-grow w-full lg:w-2/3 lg:pl-2">
            <div class="bg-white rounded-xl shadow px-8 py-6">
                <form action="{{ route('lotus.reserve') }}#reserve" method="post" class="space-y-4" id="reserve">
                    @unless(LotusReservation::acceptingNewReservations())
                        <div class="bg-red-100 text-red-700 px-6 py-4 rounded-lg text-black flex flex-row">
                            <div class="error-icon flex-shrink flex items-center mr-2 stroke-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-red-700">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div class="error-info flex-grow">
                                <p class="break-all">New reservations are no longer being accepted.</p>
                            </div>
                        </div>
                    @endif
                    @if(LotusReservation::isSoldOut())
                        <div class="bg-red-100 text-red-700 px-6 py-4 rounded-lg text-black flex flex-row">
                            <div class="error-icon flex-shrink flex items-center mr-2 stroke-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-red-700">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div class="error-info flex-grow">
                                <p class="break-all">All tickets are sold out.</p>
                            </div>
                        </div>
                    @else
                        @if(LotusReservation::isSoldOutForStudents())
                        <div class="bg-red-100 text-red-700 px-6 py-4 rounded-lg text-black flex flex-row">
                            <div class="error-icon flex-shrink flex items-center mr-2 stroke-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-red-700">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div class="error-info flex-grow">
                                <p class="break-all">All Student / Faculty tickets are sold out.</p>
                            </div>
                        </div>
                        @endif
                        @if(LotusReservation::isSoldOutForGeneral())
                        <div class="bg-red-100 text-red-700 px-6 py-4 rounded-lg text-black flex flex-row">
                            <div class="error-icon flex-shrink flex items-center mr-2 stroke-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-red-700">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div class="error-info flex-grow">
                                <p class="break-all">All General Admission tickets are sold out.</p>
                            </div>
                        </div>
                        @endif
                    @endif
                    @error('error')
                    <div class="bg-red-100 text-red-700 px-6 py-4 rounded-lg text-black flex flex-row">
                        <div class="error-icon flex-shrink flex items-center mr-2 stroke-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-red-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </div>
                        <div class="error-info flex-grow">
                            <p class="break-all">{{ $message }}</p>
                        </div>
                    </div>
                    @enderror
                    <div class="flex flex-col space-y-2">
                        <p class="text-xl font-bold">I'm a...</p>
                        <div class="radio-toolbar flex flex-col md:flex-row w-full">
                            <div class="flex-grow">
                                <input type="radio" name="holder_type" id="holder_type__student" value="student" class="opacity-0 fixed w-0 peer" {{ !old('holder_type') ? 'checked' : (old('holder_type') === 'student' ? 'checked' : '')}}>
                                <label for="holder_type__student" class="text-white bg-green-500 inline-block px-4 py-4 hover:bg-green-600 peer-checked:bg-green-700 peer-checked:text-yellow-400 w-full hover:cursor-pointer transition-all rounded-t md:rounded-tr-none md:rounded-l-lg">
                                    <div class="flex flex-row align-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
                                            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                                        </svg>
                                        <span>UAB Student / Faculty</span>
                                    </div>
                                </label>
                            </div>
                            <div class="flex-grow">
                                <input type="radio" name="holder_type" id="holder_type__general" value="general" class="opacity-0 fixed w-0 peer" {{ old('holder_type') === 'general' ? 'checked' : '' }}>
                                <label for="holder_type__general" class="text-white bg-green-500 inline-block px-4 py-4 hover:bg-green-600 peer-checked:bg-green-700 peer-checked:text-yellow-400 w-full hover:cursor-pointer transition-all rounded-b md:rounded-bl-none md:rounded-r-lg">
                                    <div class="flex flex-row align-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
                                            <path fill-rule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
                                        </svg>
                                        <span>General Attendee</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        @error('holder_type')
                        <small class="text-red-700">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="name" class="text-xl font-bold">Full Name</label>
                        <input type="text" name="name" id="name" value="{{ old('name') }}" class="rounded-lg border-2 border-gray-300 px-4 py-2 text-black @error('name') border-red-400 bg-red-200 @enderror">
                        @error('name')
                        <small class="text-red-700">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="email" class="text-xl font-bold">Blazer E-Mail</label>
                        <input type="email" name="email" id="email" value="{{ old('email') }}" placeholder="student@uab.edu" class="rounded-lg border-2 border-gray-300 px-4 py-2 text-black @error('email') border-red-400 bg-red-200 @enderror">
                        @error('email')
                        <small class="text-red-700">{{ $message }}</small>
                        @enderror
                    </div>
{{--                    <div class="flex flex-col space-y-2 xl:space-y-0 xl:flex-row xl:space-x-6">--}}
                    <div class="flex flex-col space-y-2 flex-grow hidden" id="tickets_form_group">
                        <label for="tickets" class="text-xl font-bold">How many tickets would you like to purchase?</label>
                        <input type="number" name="tickets" id="tickets" min="1" max="3" value="{{ old('tickets') ?? '1' }}" class="rounded-lg border-2 border-gray-300 px-4 py-2 text-black @error('tickets') border-red-400 bg-red-200 @enderror">
                        <small class="text-gray-500">3 maximum</small>
                        @error('tickets')
                        <small class="text-red-700">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="flex flex-col space-y-2 flex-grow hidden" id="affiliation_form_group">
                        <label for="affiliation" class="text-xl font-bold">If you are from another VSA, please indicate which school you are from here.</label>
                        <input type="text" name="affiliation" id="affiliation" value="{{ old('affiliation') }}" class="rounded-lg border-2 border-gray-300 px-4 py-2 text-black @error('affiliation') border-red-400 bg-red-200 @enderror">
                        <small class="text-gray-500">Optional</small>
                        @error('affiliation')
                        <small class="text-red-700">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="flex flex-col space-y-2 mt-4">
                        <label for="dietary" class="text-xl font-bold">Please list any dietary restrictions here.</label>
                        <textarea rows="3" name="dietary" id="dietary" class="rounded-lg border-2 border-gray-300 px-4 py-2 text-black @error('dietary') border-red-400 bg-red-200 @enderror">{{ old('dietary') }}</textarea>
                        <small class="text-gray-500">Optional</small>
                        @error('dietary')
                        <small class="text-red-700">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="accommodations" class="text-xl font-bold">Please indicate if you have any auditory, visual impairments, or disability accommodations here.</label>
                        <textarea rows="3" name="accommodations" id="accommodations" class="rounded-lg border-2 border-gray-300 px-4 py-2 text-black @error('name') border-red-400 bg-red-200 @enderror">{{ old('accommodations') }}</textarea>
                        <small class="text-gray-500">Optional</small>
                        @error('accommodations')
                        <small class="text-red-700">{{ $message }}</small>
                        @enderror
                    </div>
                    {{ @csrf_field() }}
                    <div class="flex justify-end">
                        <button type="submit" class="text-white bg-emerald-600 hover:bg-emerald-700 transition-all inline-block px-9 py-3 rounded-md" @if(LotusReservation::isSoldOut() || !LotusReservation::acceptingNewReservations()) disabled @endif>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    </section>

    <script>
        $studentRadio = document.getElementById('holder_type__student')
        $generalRadio = document.getElementById('holder_type__general')
        $emailLabel = document.querySelector('form#reserve label[for="email"]')
        $emailInput = document.querySelector('form#reserve input[name="email"]')
        $ticketsFormGroup = document.getElementById('tickets_form_group')
        $affiliationFormGroup = document.getElementById('affiliation_form_group')

        $generalRadio.addEventListener('change', () => {
            $emailLabel.innerText = 'E-Mail'
            $emailInput.placeholder = 'you@domain.com'
            $ticketsFormGroup.classList.remove('hidden')
            $affiliationFormGroup.classList.remove('hidden')
        })

        $studentRadio.addEventListener('change', () => {
            $emailLabel.innerText = 'Blazer E-Mail'
            $emailInput.placeholder = 'student@uab.edu'
            $ticketsFormGroup.classList.add('hidden')
            $affiliationFormGroup.classList.add('hidden')
        })

        if ($generalRadio.checked) {
            $generalRadio.dispatchEvent(new Event('change'))
        }
    </script>

@endsection
