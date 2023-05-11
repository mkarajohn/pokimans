'use client';

function Page() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target as HTMLFormElement);
          fetch('/api/signup', {
            method: 'POST',
            // headers: { 'Content-Type': 'multipart/form-data' },
            body: JSON.stringify(Object.fromEntries(formData)),
          });
        }}
      >
        <input name="name" type="text" />
        <input name="email" type="email" />
        <input name="password" type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Page;
