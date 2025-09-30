@@ .. @@
             {/* Logo */}
             <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/Screenshot 2025-06-25 at 10.01.56 AM copy copy.png" 
                alt="SriNilayam Interiors" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  console.error('Logo failed to load');
                }}
              />
              <span className="text-xl font-bold text-orange-500">SriNilayam Interiors</span>
             </Link>