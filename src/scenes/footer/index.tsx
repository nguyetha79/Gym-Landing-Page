import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Evogym Logo" />
          <p className="my-5">
            Evogym is your ultimate fitness destination, offering top-tier equipment and expert training to help you achieve your fitness goals. Join our community of like-minded individuals committed to health, strength, and wellness.
          </p>
          <p>&copy; Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="my-5">Home</p>
          <p className="my-5">Our Classes</p>
          <p>Benefits</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Weißenburgstraße 10, 93055 Regensburg</p>
          <p>(333) 425-6825</p>
          <p>info@evogym.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
