import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const RSVP = () => {
  const [attending, setAttending] = useState("");
  const [numberOfGuestsDisabled, setNumberOfGuestsDisabled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 500,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    try {
      const res = await fetch("https://sheetdb.io/api/v1/97x0nfeijafg1", {
        method: "POST",
        body: formDatab,
      });
      if (!res.ok) {
        throw new Error("Respons jaringan tidak berhasil");
      }

      // Tampilkan pesan sukses ke pengguna
      Swal.fire({
        title: "Sukses!",
        text: "Pesan Anda berhasil dikirim.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Kesalahan saat mengirim permintaan:", error);
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan saat mengirim pesan Anda.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleAttendingChange = (e) => {
    const selectedValue = e.target.value;
    setAttending(selectedValue);
    if (selectedValue === "I am not attending") {
      setNumberOfGuestsDisabled(true);
    } else {
      setNumberOfGuestsDisabled(false);
    }
  };
  return (
    <div className='mx-auto py-9 px-5 lg:px-0 lg:py-24 bg-rsvp '>
      <div className='flex justify-center items-center '>
        <div
          className='bg-black bg-opacity-60 rounded-2xl shadow-md p-6 md:p-8 lg:p-10 lg:w-3/4 text-center'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <form className='form' style={{ opacity: "100%" }}>
            <h2 className='text-3xl text-gold custom-text py-4'>
              Are You Attending?
            </h2>
            <div>
              <div className='mb-4'>
                <input
                  type='text'
                  id='firstName'
                  name='Name'
                  placeholder='Enter your name'
                  className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
                />
              </div>
            </div>

            <div className='mb-4'>
              <select
                id='attending'
                name='Attending'
                className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
                onChange={handleAttendingChange}
              >
                <option value=''>Are you attending?</option>
                <option value='I am attending'>I am attending</option>
                <option value='I am not attending'>I am not attending</option>
              </select>
            </div>

            <div className='mb-4'>
              <select
                id='numberOfGuests'
                name='Number'
                className={`w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500 ${
                  numberOfGuestsDisabled ? "bg-gray-300" : ""
                }`}
                disabled={numberOfGuestsDisabled}
              >
                <option value=''>Number of guests</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>

            <div className='mb-4'>
              <textarea
                id='message'
                name='Messege'
                placeholder='Type your message here'
                rows='4'
                className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
              ></textarea>
            </div>
            <div className='flex justify-center items-center'>
              <button
                type='submit'
                className='bg-gold text-black py-3 px-6 hover:animate-pulse transition duration-200 rounded-xl'
                onClick={handleSubmit}
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
