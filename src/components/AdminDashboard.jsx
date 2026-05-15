import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileDown, FileText } from 'lucide-react';
import { getAllFiles } from '../firebase/firebase';

const AdminDashboard = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const fetchedFiles = await getAllFiles();
        setFiles(fetchedFiles);
      } catch (error) {
        console.error("Failed to fetch files:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFiles();
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Admin Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">View and download files uploaded by users.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-white/5"
        >
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary-500" />
            Uploaded Files
          </h2>

          {loading ? (
            <p className="text-slate-500 dark:text-slate-400">Loading files...</p>
          ) : files.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-400">No files uploaded yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="py-4 px-4 font-semibold text-slate-700 dark:text-slate-300">File Name</th>
                    <th className="py-4 px-4 font-semibold text-slate-700 dark:text-slate-300">Uploader</th>
                    <th className="py-4 px-4 font-semibold text-slate-700 dark:text-slate-300">Date</th>
                    <th className="py-4 px-4 font-semibold text-slate-700 dark:text-slate-300 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file) => (
                    <tr key={file.id} className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-dark-700/50 transition-colors">
                      <td className="py-4 px-4 text-slate-900 dark:text-white font-medium">{file.fileName}</td>
                      <td className="py-4 px-4 text-slate-600 dark:text-slate-400">{file.uploaderName}</td>
                      <td className="py-4 px-4 text-slate-600 dark:text-slate-400">
                        {new Date(file.uploadedAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <a 
                          href={file.fileData} 
                          download={file.fileName}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          <FileDown className="w-4 h-4" /> Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
