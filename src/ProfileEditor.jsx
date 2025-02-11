import { useState } from "react";

export default function ProfileEditor() {

  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profile);
    // Here you would typically send the data to your backend
  };

  return (
    <>
      <h3>RegisterForm</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Profile Picture:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {profile.image && (
            <img
              src={profile.image}
              alt="Profile preview"
              style={{ width: "100px", height: "100px" }}
            />
          )}
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </>
  );
}
