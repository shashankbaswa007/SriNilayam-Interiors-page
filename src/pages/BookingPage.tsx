@@ .. @@
   const [currentStep, setCurrentStep] = useState(1);
   const [formData, setFormData] = useState<FormData>({
-    // Step 1: Personal Info
     name: '',
     email: '',
     phone: '',
-    
-    // Step 2: Project Details
     projectType: '',
     propertyType: '',
     rooms: [],
     budget: '',
     timeline: '',
-    // Step 3: Consultation Details
     consultationType: '',
     preferredDate: '',
     preferredTime: '',
     address: '',
     additionalNotes: ''
   });

+  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
+    const { name, value } = e.target;
+    setFormData(prev => ({
+      ...prev,
+      [name]: value
+    }));
+  };

   const handleRoomToggle = (room: string) => {
     setFormData(prev => ({
       ...prev,
       rooms: prev.rooms.includes(room)
         ? prev.rooms.filter(r => r !== room)
         : [...prev.rooms, room]
     }));
   };