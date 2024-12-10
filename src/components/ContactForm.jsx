import { useForm } from "react-hook-form"
import { MdOutlineMailOutline } from "react-icons/md"
import { MdOutlineLocalPhone } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
    // Handle form submission here
  }

  return (
    <div id="contact" className="bg-gray-900 text-white py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-4 text-unlock">
            Tell Us
          </h2>
          <h2 className="text-4xl font-bold text-orange-500 mb-8 text-unlock">
            What Is Your Idea
          </h2>
          <p className="text-gray-300 mb-6">
            Feel free to contact us for any inquiries, collaborations, or
            project discussions. Our team is here to assist you. You can reach
            us via phone, email, or by filling out the contact form below.
          </p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center">
              <MdOutlineLocalPhone className="text-xl me-4" />
              <span>+922 001 126 900</span>
            </li>
            <li className="flex items-center">
              <MdOutlineMailOutline className="text-xl me-4" />
              <span>info@momentummix.com</span>
            </li>
            <li className="flex items-center">
              <IoLocationOutline className="text-xl me-4" />
              <span>Saudi Arabia</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="mt-1 p-2 w-full bg-gray-800 rounded border border-gray-600"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Invalid email",
                  },
                })}
                className="mt-1 p-2 w-full bg-gray-800 rounded border border-gray-600"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                {...register("phone", { required: "Phone is required" })}
                className="mt-1 p-2 w-full bg-gray-800 rounded border border-gray-600"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Services</label>
              <select
                {...register("services", {
                  required: "Please select a service",
                })}
                className="mt-1 p-2 w-full bg-gray-800 rounded border border-gray-600"
              >
                <option value="">Select a service</option>
                <option value="webDevelopment">Web Development</option>
                <option value="graphicDesign">Graphic Design</option>
                <option value="marketing">Marketing</option>
              </select>
              {errors.services && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.services.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="mt-1 p-2 w-full bg-gray-800 rounded border border-gray-600"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold"
              >
                Send It
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
