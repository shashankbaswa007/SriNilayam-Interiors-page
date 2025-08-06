@@ .. @@
+    const { name, value } = e.target;
     setFormData({
       ...formData,
-      [e.target.name]: e.target.value
+      [name]: value
     });
   };