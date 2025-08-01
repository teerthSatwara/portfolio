import React from 'react'

function Footer() {
    return (
        <footer className="w-full mt-12 border-t py-6 text-center text-sm text-gray-600">
            <p>
                &copy; {new Date().getFullYear()} Teerth Vipulkumar. All rights
                reserved.
            </p>
            <div className="mt-2 flex justify-center space-x-4 text-blue-600">

                <a href="mailto:tsatwar1@jh.edu" className="hover:underline">
                    Contact
                </a>
            </div>
        </footer>
    );
}

export default Footer