function getFormvalue() {
    //Write your code here
	event.preventDefault();

  // Get the values of the first and last name input fields
  const firstNameValue = form1.fname.value;
  const lastNameValue = form1.lname.value;

  // if (firstNameValue.trim() === "" || lastNameValue.trim() === "") {
  //   alert("Please enter both first and last names.");
  // } else {
  // }
    alert(`${firstNameValue} ${lastNameValue}`);
}
