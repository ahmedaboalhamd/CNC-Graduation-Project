import {
  Cog,
  Cpu,
  Wrench,
  ShieldAlert,
  Zap,
  Box,
  Power,
  Camera,
} from "lucide-react";

export const componentsData = [
  {
    id: 1,
    name: "MOTHER BOARD GRBL 1.1",
    description:
      "The main brain of the CNC machine, handling g-code parsing and sending precise control signals.",
    function:
      "Processes the G-code and directly controls the CNC system based on the robust GRBL 1.1 firmware.",
    icon: Cpu,
    image: import.meta.env.BASE_URL + "grbl1.png",
  },
  {
    id: 2,
    name: "ESP32 WROVER CAM",
    description:
      "Advanced microcontroller module equipped with a camera, used for high-quality video streaming.",
    function:
      "Streams live video feed of the CNC machining process to the web dashboard for remote monitoring.",
    icon: Camera,
    image: import.meta.env.BASE_URL + "esp32cam_new.jpeg",
  },
  {
    id: 3,
    name: "NEMA 17 Stepper Motors (x3)",
    description:
      "Three high precision motors that drive the X, Y, and Z axes of the CNC machine.",
    function: "Provides accurate linear movement along X, Y, and Z axes.",
    icon: Cog,
    image: import.meta.env.BASE_URL + "nema17.png",
  },
  {
    id: 4,
    name: "DRV8825 Motor Drivers (x3)",
    description:
      "Three current limiting drivers for controlling the three NEMA 17 stepper motors.",
    function:
      "Controls the voltage and microstepping for the three stepper motors.",
    icon: Zap,
    image: import.meta.env.BASE_URL + "drv8825.png",
  },
  {
    id: 5,
    name: "Power Supply Unit (24V)",
    description:
      "Converts AC power to stable DC power for the machine components.",
    function: "Provides required power to motors and control electronics.",
    icon: Power,
    image: import.meta.env.BASE_URL + "powersupply.png",
  },
  {
    id: 6,
    name: "Linear Rails & Bearings",
    description: "Mechanical guides for smooth motion.",
    function: "Ensures precise and smooth movement of the cutting head.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 7,
    name: "Spindle Motor",
    description: "High-speed rotating motor equipped with a cutting tool.",
    function: "Performs the actual material removal process.",
    icon: Cog,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 8,
    name: "Control Box",
    description: "Enclosure that houses all sensitive electronics.",
    function: "Protects electronic components from dust and damage.",
    icon: Box,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Ahmed Mahmoud Ali Al-Shalqami Al-Khatib", // مثال:
    studentId: "2420227", // مثال: 20201234
    image: import.meta.env.BASE_URL + "team.images/Ahmed_team_leader.jpeg", // مسار الصورة، يفضل وضع الصور في مجلد public/team
    role: "Project Leader", // الدور، مثال: Hardware Engineer, Software Developer
  },
  {
    id: 2,
    name: "Ibrahem Mohamed Moha",
    studentId: "2420195",
    image: import.meta.env.BASE_URL + "team.images/Ibrahem Mohamed.png",
    role: "Member of Hardware",
  },
  {
    id: 3,
    name: "Ahmed Ashour Salah",
    studentId: "2420217",
    image: import.meta.env.BASE_URL + "team.images/Ahmed Ashour Salah.jpg",
    role: "Member of Hardware",
  },
  {
    id: 4,
    name: "Ahmed Mohamed Ali ",
    studentId: "2420224",
    image: import.meta.env.BASE_URL + "team.images/Ahmed Mohamed.jpeg",
    role: "Member of WEB-Application",
  },
  {
    id: 5,
    name: "Ahmed Eid Abdelsalam",
    studentId: "2420220",
    image: import.meta.env.BASE_URL + "team.images/Ahmed Eid Abdelsalam.jpg",
    role: "Member of WEB-Application",
  },

  {
    id: 6,
    name: "Mahmoud Mohamed Mahmoud",
    studentId: "2421153",
    image:
      import.meta.env.BASE_URL + "team.images/Mahmoud Mohamed Mahmoud.jpeg",
    role: "Member of WEB-Application",
  },
  {
    id: 7,
    name: "Abdelghani Ismail AbdelFattah",
    studentId: "2420747",
    image:
      import.meta.env.BASE_URL +
      "team.images/Abdelghani Ismail AbdelFattah.jpg",
    role: "Member of Hardware",
  },
  {
    id: 8,
    name: "Mostafa Haitham Ezzat Mostafa",
    studentId: "2421211",
    image:
      import.meta.env.BASE_URL +
      "team.images/Mostafa Haitham Ezzat Mostafa.jpg",
    role: "Member of WEB-Application",
  },
  {
    id: 9,
    name: "Ahmed Mohamed Lotfi",
    studentId: "2420225",
    image: import.meta.env.BASE_URL + "team.images/Ahmed Mohamed Lotfi.png",
    role: "Member of PCB-Design",
  },
  {
    id: 10,
    name: "Mazen Hanin Waleed Saad",
    studentId: "2420950",
    image: import.meta.env.BASE_URL + "team.images/Mazen.jpg",
    role: "Member of PCB-Design",
  },
  {
    id: 11,
    name: "Basmala Nabil Ali El-Saeed Khneifer",
    studentId: "2420285",
    image:
      import.meta.env.BASE_URL +
      "team.images/Basmala Nabil Ali El-Saeed Khneifer.jpg",
    role: "",
  },
  {
    id: 12,
    name: "Alaa Ashraf Sayed Ahmed Zuwein",
    studentId: "2420261",
    image: import.meta.env.BASE_URL + "team.images/female_avatar.png",
    role: "",
  },
  {
    id: 13,
    name: "Amira Hassan Abdelhamid Hassan El-Sahly",
    studentId: "2420157",
    image: import.meta.env.BASE_URL + "team.images/female_avatar.png",
    role: "",
  },
  {
    id: 14,
    name: "Ahmed Hafez Abdelaziz Abdel Latif Hafez",
    studentId: "2420028",
    image:
      import.meta.env.BASE_URL +
      "team.images/Ahmed Hafez Abdelaziz Abdel Latif Hafez.jpeg",
    role: "",
  },
  {
    id: 16,
    name: "Islam Ali Abdel Fattah Abdel Latif",
    studentId: "2420118",
    image: "public/team.images/Islam Ali Abdel Fattah Abdel Latif.jpeg",
    role: "",
  },
  {
    id: 17,
    name: "Mahmoud Ahmed Fathy",
    studentId: "2421120",
    image: "public/team.images/Mahmoud Ahmed Fathy.jpg",
    role: "",
  },
  {
    id: 18,
    name: "Omnia El-Khodary Abdel Aziz Ahmed",
    studentId: "2420151",
    image: "team.images/female_avatar.png",
    role: "",
  },
  {
    id: 19,
    name: "Rawan Ismail Abdel Monem Salama",
    studentId: "2420461",
    image: "team.images/female_avatar.png",
    role: "",
  },
  {
    id: 20,
    name: "Shahd Abdel Aziz Youssef Abdel Aziz",
    studentId: "2420604",
    image: "team.images/female_avatar.png",
    role: "",
  },
  
];

export const galleryImages = [
  { type: 'video', url: import.meta.env.BASE_URL + "vedios/WhatsApp Video 2026-05-12 at 12.48.09 AM.mp4" },
  { type: 'image', url: import.meta.env.BASE_URL + "team.images/image copy2.png" },
  { type: 'image', url: "https://images.unsplash.com/photo-1537462715879-360eeb61a8ad?auto=format&fit=crop&q=80&w=800" },
  { type: 'image', url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
  { type: 'image', url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
  { type: 'image', url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" },
];
