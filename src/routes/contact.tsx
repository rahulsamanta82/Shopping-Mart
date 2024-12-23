const Contact = () => {
  return (
    <div className="h-[85vh] w-full flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold ">Contact Us</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl">
          Email: rs@gmail.com
          <a href="mailto: abc@abcxy.xyz" className="text-blue-500"></a>
        </p>
        <p className="text-xl">
          Phone: 82503011XX
          <a href="tel: 1234567890" className="text-blue-500"></a>
        </p>
        <p className="text-xl">
          Address: New Town, Kolkata, 721148
          <a href="https://goo.gl/maps/abcxyz" className="text-blue-500"></a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
