import React, { useState } from 'react';
import { Upload, File, CheckCircle, X, FileUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { uploadUserFile } from '../firebase/firebase';

const UserDashboard = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const { currentUser } = useAuth();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadSuccess(false);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setUploadSuccess(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    setUploadSuccess(false);
  };

  const handleUpload = async () => {
    if (!file) return;
    setIsUploading(true);
    try {
      await uploadUserFile(file, currentUser);
      setUploadSuccess(true);
      console.log('File uploaded to Storage and Firestore:', file.name);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload file. Please check your connection or Firebase Rules.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">User Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">Welcome back! Upload your CNC design files here.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-white/5"
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Upload CNC File</h2>
            
            <div 
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-10 text-center transition-colors ${
                file 
                ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-900/10' 
                : 'border-slate-300 dark:border-slate-700 hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-dark-700/50'
              }`}
            >
              {!file ? (
                <>
                  <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
                    <FileUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Drag & Drop your file here</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Supports .gcode, .nc, .dxf, .svg</p>
                  <label className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary-500 hover:bg-primary-600 transition-colors">
                    <span>Browse Files</span>
                    <input type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-slate-100 dark:bg-dark-700 flex items-center justify-center text-primary-500 relative">
                    <File className="w-8 h-8" />
                    <button 
                      onClick={removeFile}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-slate-900 dark:text-white font-medium mb-1">{file.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{(file.size / 1024).toFixed(2)} KB</p>
                  
                  {uploadSuccess ? (
                    <div className="flex items-center text-green-500 font-medium bg-green-50 dark:bg-green-500/10 px-4 py-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      File successfully saved to database!
                    </div>
                  ) : (
                    <button
                      onClick={handleUpload}
                      disabled={isUploading}
                      className={`inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white transition-colors ${
                        isUploading ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600'
                      }`}
                    >
                      {isUploading ? (
                        <>
                          <Upload className="w-4 h-4 mr-2 animate-bounce" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Upload to Database
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-white/5 h-fit"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Recent Uploads</h3>
            <div className="space-y-4">
              {uploadSuccess ? (
                <div className="flex items-center p-3 bg-slate-50 dark:bg-dark-700/50 rounded-xl border border-slate-100 dark:border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 mr-3">
                    <File className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{file.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Just now</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 bg-slate-50 dark:bg-dark-700/30 rounded-xl border border-slate-100 dark:border-white/5">
                  <p className="text-sm text-slate-500 dark:text-slate-400">No recent files</p>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
