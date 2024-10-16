function userApp() {
  return {
    users: [],
    addUser() {
      const form = document.getElementById('userForm');
      const pristine = new Pristine(form);

      const valid = pristine.validate(); 
      if (!valid) {
        alert('Please fill the form correctly.');
        return; 
      }

      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mobile').value;
      const role = document.getElementById('role').value;

      const newUser = { firstName, lastName, email, mobile, role };

      this.users.push(newUser);

      form.reset();
    }
  };
}

document.addEventListener('alpine:init', () => {
  Alpine.data('userApp', userApp);
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('userForm');
  const pristine = new Pristine(form);

  form.addEventListener('submit', function (e) {
    const valid = pristine.validate();
    if (!valid) {
      e.preventDefault();
      alert('Please fill the form correctly.');
    }
  });
});
