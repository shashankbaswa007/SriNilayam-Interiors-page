   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
+    const { name, value } = e.target;
     setFormData({
       ...formData,
-      [e.target.name]: e.target.value
+      [name]: value
     });
   };