import Image from "next/image";

const people = [
  {
    name: "Hari Thapa",
    role: "President",
    imageUrl:
      "https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/45619159_651275901933771_1425853928804712448_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=XqUEZOtF3W8AX9XKt9i&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDfdsqq6WEsbwGry8k7RDac7AxKp4LusoZe87LMiS3Qvg&oe=64B6E3B8",
  },
  {
    name: "Neeti Subedi",
    role: "Vice President",
    imageUrl:
      "https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/344906897_637192928257805_3470289879463504362_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o29Y0olrii0AX86PinH&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDN6BX4vMz2UXtb1F5_kOzatbgxMaawbt5HG2WGFGgPlQ&oe=6493A5B9",
  },
  {
    name: "Rajeev Shrestha",
    role: "Executive Member",
    imageUrl:
      "https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/338432734_892453461810456_7616563052109025629_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JZwLAHB00QoAX_qNdFa&_nc_ht=scontent.fktm16-1.fna&oh=00_AfC8SiK1ZzztiXC0jucaMnC-aCZQ4ix-6NNIMmeqpxuuJQ&oe=64952A34",
  },
  {
    name: "Binu Nemkul",
    role: "Executive Member",
    imageUrl:
      "https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/315737507_1346005436228784_7585020823896074_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DTCCp6788MUAX-G_KZS&_nc_ht=scontent.fktm16-1.fna&oh=00_AfCjEMtwA9Uej9Qirre5MewgZvznrI8QPyE28I1H50SJfg&oe=64943315",
  },
  {
    name: "Rivash Shrestha",
    role: "Executive Member",
    imageUrl:
      "https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/328699999_562373849283726_8851704625622935112_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8CDXrXLSH_kAX_MvZJZ&_nc_ht=scontent.fktm16-1.fna&oh=00_AfAU1-SfZ3ohwMYDFlLv23oPDB_yq4_G4Igc7UhP4153xQ&oe=64954BB3",
  },
  {
    name: "Yunisha Ghimire",
    role: "Executive Member",
    imageUrl:
      "data:image/jpeg;base64,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",
  },

  // More people...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our members
          </h2>
          <p className="mt-6 text-lg leading-8  text-gray-600">
            CCRC IT Club consists of dedicated and enthusiastic members who share a common interest
            in technology, information technology, and computer science. Together, we explore,
            learn, and grow in the ever-evolving world of technology.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt={person.name + " " + person.role}
                  width={1000}
                  height={1000}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
