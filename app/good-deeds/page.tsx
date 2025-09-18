

// // "use client";
// // import React, { useState } from 'react';
// // import { Heart, Users, Gift, Award, Plus, Clock, CheckCircle, FileImage, FileText, Video, Upload, Globe } from "lucide-react";
// // import { useTranslation } from "react-i18next";
// // import PolicyLayout from '@/components/PolicyLayout';

// // interface GoodDeed {
// //   id: string;
// //   title: string;
// //   description: string;
// //   points: number;
// //   is_approved: boolean;
// //   proof_file_type: string;
// //   proof_file_path: string;
// //   submission_notes: string;
// //   created_at: string;
// //   charity_id: string | null;
// //   charities?: {
// //     name: string;
// //   };
// // }

// // const GoodDeeds = () => {
// //   const { t, i18n } = useTranslation();
// //   const [activeTab, setActiveTab] = useState('submit');
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     description: '',
// //     charity: '',
// //     type: 'regular',
// //     additionalNotes: ''
// //   });

// //   // Language flags
// //   const languages = [
// //     { code: 'en', flag: '🇺🇸', name: 'English' },
// //     { code: 'ru', flag: '🇷🇺', name: 'Русский' },
// //     { code: 'he', flag: '🇮🇱', name: 'עברית' }
// //   ];

// //   // Mock data with translations
// //   const getMockDeeds = (): GoodDeed[] => [
// //     {
// //       id: '1',
// //       title: t('mockDeeds.deed1.title'),
// //       description: t('mockDeeds.deed1.description'),
// //       points: 12,
// //       is_approved: true,
// //       proof_file_type: 'image',
// //       proof_file_path: '',
// //       submission_notes: '',
// //       created_at: '8/23/2025',
// //       charity_id: null
// //     },
// //     {
// //       id: '2',
// //       title: t('mockDeeds.deed2.title'),
// //       description: t('mockDeeds.deed2.description'),
// //       points: 12,
// //       is_approved: true,
// //       proof_file_type: 'image',
// //       proof_file_path: '',
// //       submission_notes: '',
// //       created_at: '8/23/2025',
// //       charity_id: null
// //     },
// //     {
// //       id: '3',
// //       title: t('mockDeeds.deed3.title'),
// //       description: t('mockDeeds.deed3.description'),
// //       points: 12,
// //       is_approved: true,
// //       proof_file_type: 'image',
// //       proof_file_path: '',
// //       submission_notes: '',
// //       created_at: '8/23/2025',
// //       charity_id: null
// //     }
// //   ];

// //   const handleLanguageChange = (languageCode: string) => {
// //     i18n.changeLanguage(languageCode);
// //   };

// //   const handleInputChange = (field: string, value: string) => {
// //     setFormData(prev => ({ ...prev, [field]: value }));
// //   };

// //   const handleSubmit = () => {
// //     console.log('Submitting good deed:', formData);
// //     // Handle form submission
// //   };

// //   const renderSubmitForm = () => (
// //     <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-10">
// //       <div className="flex items-center gap-2 mb-6">
// //         <Plus className="w-5 h-5 text-sky-600" />
// //         <h2 className="text-xl font-semibold">{t('submitProofTitle')}</h2>
// //       </div>

// //       <div className="space-y-4">
// //         <div>
// //           <label className="block text-sm font-medium mb-2">{t('goodDeedTitle')}</label>
// //           <input
// //             type="text"
// //             placeholder={t('goodDeedTitlePlaceholder')}
// //             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
// //             value={formData.title}
// //             onChange={(e) => handleInputChange('title', e.target.value)}
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-2">{t('description')}</label>
// //           <textarea
// //             placeholder={t('descriptionPlaceholder')}
// //             rows={4}
// //             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
// //             value={formData.description}
// //             onChange={(e) => handleInputChange('description', e.target.value)}
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-2">{t('charity')}</label>
// //           <select
// //             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
// //             value={formData.charity}
// //             onChange={(e) => handleInputChange('charity', e.target.value)}
// //           >
// //             <option value="">{t('selectCharity')}</option>
// //             <option value="red-cross">{t('redCross')}</option>
// //             <option value="unicef">{t('unicef')}</option>
// //             <option value="local-charity">{t('localCharity')}</option>
// //           </select>
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-2">{t('typeOfGoodDeed')}</label>
// //           <select
// //             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
// //             value={formData.type}
// //             onChange={(e) => handleInputChange('type', e.target.value)}
// //           >
// //             <option value="regular">{t('regularGoodDeed')}</option>
// //             <option value="exceptional">{t('exceptionalGoodDeed')}</option>
// //             <option value="volunteer">{t('volunteerWork')}</option>
// //           </select>
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-2">{t('proof')}</label>
// //           <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-sky-400 transition-colors">
// //             <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
// //             <p className="text-sm text-gray-600 mb-1">{t('clickToUpload')}</p>
// //             <p className="text-xs text-gray-500">{t('fileTypes')}</p>
// //           </div>
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-2">{t('additionalNotes')}</label>
// //           <textarea
// //             placeholder={t('additionalNotesPlaceholder')}
// //             rows={3}
// //             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
// //             value={formData.additionalNotes}
// //             onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
// //           />
// //         </div>

// //         <button
// //           onClick={handleSubmit}
// //           className="w-full bg-sky-500 text-white py-3 px-6 rounded-2xl hover:bg-sky-600 transition-colors font-medium"
// //         >
// //           {t('submitForApproval')}
// //         </button>

// //         <div className="bg-sky-50 p-4 rounded-md">
// //           <p className="text-sm text-sky-800">
// //             {t('approvalMessage')}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderMyDeeds = () => {
// //     const mockDeeds = getMockDeeds();
    
// //     return (
// //       <div className="max-w-4xl mx-auto mb-10">
// //         <h2 className="text-2xl font-bold mb-6">{t('myDeeds')}</h2>
// //         <div className="space-y-4">
// //           {mockDeeds.map((deed) => (
// //             <div key={deed.id} className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-yellow-400">
// //               <div className="flex justify-between items-start mb-2">
// //                 <h3 className="text-lg font-semibold">{deed.title}</h3>
// //                 <div className="flex items-center gap-2">
// //                   <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
// //                     {deed.points} {t('points').toLowerCase()}
// //                   </span>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-2 mb-2">
// //                 <CheckCircle className="w-4 h-4 text-green-500" />
// //                 <span className="text-sm text-green-600 font-medium">{t('approved')}</span>
// //                 <span className="text-sm text-gray-500">• {deed.created_at}</span>
// //               </div>
// //               <p className="text-gray-600 text-sm">{deed.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };

// //   const renderAbout = () => (
// //     <div className="max-w-4xl mx-auto space-y-8 mb-10">
// //       {/* Feature Cards */}
// //       <div className="grid md:grid-cols-4 gap-6">
// //         <div className="bg-white rounded-2xl p-6 text-center shadow-md">
// //           <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
// //           <h3 className="font-semibold mb-2">{t('collectGoldHearts')}</h3>
// //           <p className="text-sm text-gray-600">{t('collectGoldHeartsDesc')}</p>
// //         </div>
// //         <div className="bg-white rounded-2xl p-6 text-center shadow-md">
// //           <Users className="w-12 h-12 text-sky-500 mx-auto mb-4" />
// //           <h3 className="font-semibold mb-2">{t('communityVolunteering')}</h3>
// //           <p className="text-sm text-gray-600">{t('communityVolunteeringDesc')}</p>
// //         </div>
// //         <div className="bg-white rounded-2xl p-6 text-center shadow-md">
// //           <Gift className="w-12 h-12 text-green-500 mx-auto mb-4" />
// //           <h3 className="font-semibold mb-2">{t('charityDonations')}</h3>
// //           <p className="text-sm text-gray-600">{t('charityDonationsDesc')}</p>
// //         </div>
// //         <div className="bg-white rounded-2xl p-6 text-center shadow-md">
// //           <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
// //           <h3 className="font-semibold mb-2">{t('socialRecognition')}</h3>
// //           <p className="text-sm text-gray-600">{t('socialRecognitionDesc')}</p>
// //         </div>
// //       </div>

// //       {/* How it works */}
// //       <div className="bg-sky-50 rounded-2xl p-6">
// //         <h3 className="text-xl font-semibold mb-4">{t('howItWorks')}</h3>
// //         <div className="space-y-3">
// //           <div className="flex items-start gap-3">
// //             <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">1</span>
// //             <p>{t('step1')}</p>
// //           </div>
// //           <div className="flex items-start gap-3">
// //             <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">2</span>
// //             <p>{t('step2')}</p>
// //           </div>
// //           <div className="flex items-start gap-3">
// //             <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">3</span>
// //             <p>{t('step3')}</p>
// //           </div>
// //           <div className="flex items-start gap-3">
// //             <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">4</span>
// //             <p>{t('step4')}</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Supported file types */}
// //       <div className="bg-green-50 rounded-2xl p-6">
// //         <h3 className="text-xl font-semibold mb-4">{t('supportedFileTypes')}</h3>
// //         <div className="grid md:grid-cols-3 gap-4">
// //           <div className="flex items-center gap-2">
// //             <FileImage className="w-5 h-5 text-green-600" />
// //             <span>{t('images')}</span>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <FileText className="w-5 h-5 text-green-600" />
// //             <span>{t('documents')}</span>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <Video className="w-5 h-5 text-green-600" />
// //             <span>{t('videos')}</span>
// //           </div>
// //         </div>
// //         <p className="text-sm text-gray-600 mt-3">{t('maxFileSize')}</p>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <PolicyLayout>
// //       <div className="space-y-8">
// //         {/* Header */}
// //         <div className="text-center mt-8">
// //           {/* Language Selector - Top Right */}
// //           <div className="flex justify-end mb-6">
// //             <div className="relative">
// //               <select
// //                 value={i18n.language}
// //                 onChange={(e) => handleLanguageChange(e.target.value)}
// //                 className="border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm appearance-none bg-white"
// //               >
// //                 {languages.map((lang) => (
// //                   <option key={lang.code} value={lang.code}>
// //                     {lang.flag} {lang.name}
// //                   </option>
// //                 ))}
// //               </select>
// //               <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
// //             </div>
// //           </div>

// //           <h1 className="text-4xl font-bold text-gray-900 mb-3">{t('title')}</h1>
// //           <p className="text-gray-600 text-lg mb-8">{t('subtitle')}</p>

// //           {/* Stats - Centered */}
// //           <div className="flex items-center justify-center gap-6 mb-8">
// //             <div className="flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3 border border-gray-200">
// //               <Heart className="w-5 h-5 text-pink-500" />
// //               <span className="font-bold text-lg">17</span>
// //               <span className="text-sm text-gray-600">{t('goldHearts')}</span>
// //             </div>
// //             <div className="flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3 border border-gray-200">
// //               <Award className="w-5 h-5 text-sky-500" />
// //               <span className="font-bold text-lg">1050</span>
// //               <span className="text-sm text-gray-600">{t('points')}</span>
// //             </div>
// //           </div>

// //           {/* Navigation Tabs */}
// //           <div className="max-w-2xl mx-auto">
// //             <div className="bg-white rounded-full p-2 shadow-sm border border-gray-200">
// //               <div className="flex">
// //                 {[
// //                   { key: 'submit', label: t('submitGoodDeed') },
// //                   { key: 'my-deeds', label: t('myDeeds') },
// //                   { key: 'about', label: t('about') }
// //                 ].map((tab) => (
// //                   <button
// //                     key={tab.key}
// //                     onClick={() => setActiveTab(tab.key)}
// //                     className={`flex-1 py-3 px-6 font-medium text-sm transition-all rounded-full ${
// //                       activeTab === tab.key
// //                         ? 'bg-yellow-300 text-gray-900 shadow-sm'
// //                         : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
// //                     }`}
// //                   >
// //                     {tab.label}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <div className="mt-8">
// //           {activeTab === 'submit' && renderSubmitForm()}
// //           {activeTab === 'my-deeds' && renderMyDeeds()}
// //           {activeTab === 'about' && renderAbout()}
// //         </div>
// //       </div>
// //     </PolicyLayout>
// //   );
// // };

// // export default GoodDeeds;

// "use client";
// import React, { useState } from 'react';
// import { Heart, Users, Gift, Award, Plus, Clock, CheckCircle, FileImage, FileText, Video, Upload, Globe } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import PolicyLayout from '@/components/PolicyLayout';

// interface GoodDeed {
//   id: string;
//   title: string;
//   description: string;
//   points: number;
//   is_approved: boolean;
//   proof_file_type: string;
//   proof_file_path: string;
//   submission_notes: string;
//   created_at: string;
//   charity_id: string | null;
//   charities?: {
//     name: string;
//   };
// }

// const GoodDeeds = () => {
//   const { t, i18n } = useTranslation();
//   const [activeTab, setActiveTab] = useState('about');
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     charity: '',
//     type: 'regular',
//     additionalNotes: '',
//     proof: null
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   // Language flags
//   const languages = [
//     { code: 'en', flag: '🇺🇸', name: 'English' },
//     { code: 'ru', flag: '🇷🇺', name: 'Русский' },
//     { code: 'he', flag: '🇮🇱', name: 'עברית' }
//   ];

//   // Mock data with translations
//   const getMockDeeds = (): GoodDeed[] => [
//     {
//       id: '1',
//       title: t('mockDeeds.deed1.title'),
//       description: t('mockDeeds.deed1.description'),
//       points: 12,
//       is_approved: true,
//       proof_file_type: 'image',
//       proof_file_path: '',
//       submission_notes: '',
//       created_at: '8/23/2025',
//       charity_id: null
//     },
//     {
//       id: '2',
//       title: t('mockDeeds.deed2.title'),
//       description: t('mockDeeds.deed2.description'),
//       points: 12,
//       is_approved: true,
//       proof_file_type: 'image',
//       proof_file_path: '',
//       submission_notes: '',
//       created_at: '8/23/2025',
//       charity_id: null
//     },
//     {
//       id: '3',
//       title: t('mockDeeds.deed3.title'),
//       description: t('mockDeeds.deed3.description'),
//       points: 12,
//       is_approved: true,
//       proof_file_type: 'image',
//       proof_file_path: '',
//       submission_notes: '',
//       created_at: '8/23/2025',
//       charity_id: null
//     }
//   ];

//   const handleLanguageChange = (languageCode: string) => {
//     i18n.changeLanguage(languageCode);
//   };

//   const handleInputChange = (field: string, value: string | File) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       // Validate file size (10MB max)
//       if (file.size > 10 * 1024 * 1024) {
//         alert(t('fileTooLarge') || 'File size must be less than 10MB');
//         return;
//       }
      
//       // Validate file type
//       const allowedTypes = [
//         'image/jpeg', 'image/png', 'image/webp',
//         'application/pdf',
//         'video/mp4', 'video/webm', 'video/mov', 'video/quicktime'
//       ];
      
//       if (!allowedTypes.includes(file.type)) {
//         alert(t('invalidFileType') || 'Please select a valid file type (JPG, PNG, WEBP, PDF, MP4, WebM, MOV)');
//         return;
//       }
      
//       handleInputChange('proof', file);
//     }
//   };

//   const handleSubmit = async () => {
//     // Validation
//     if (!formData.title.trim()) {
//       alert(t('titleRequired') || 'Title is required');
//       return;
//     }
    
//     if (formData.title.length < 3 || formData.title.length > 200) {
//       alert(t('titleLengthError') || 'Title must be between 3 and 200 characters');
//       return;
//     }
    
//     if (formData.description && formData.description.length > 2000) {
//       alert(t('descriptionTooLong') || 'Description must be less than 2000 characters');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Get token from localStorage or your auth system
//       const token = localStorage.getItem('authToken') || 'eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0.qslRYMmDzETjy8qvcJLaPb64hpQXsNfy3uK097RvR2kb-s__Y0KAJkoQ4cgBlGl1tgRnuzVHJK2mGU4jV-8tvnQKSIolCW3I.Vdl5o5_3LS0R-YFJY6aq7Q.X92-LANrKZA6e2EmwGQBf9DtBIxCurHw9egCYQxhxmf7DzMb89Wo9S0OIrPmNgJpq4K0g0Crxh5v46RSNijoUkn5AV-hwZuFnuJbVfc7kkbtKlLzeuUBJoHaZKYhFjU6dkKZJVro2cEFghJ-imqz5eEaxJf7vVJqE2YDY5oh1TCyZCq6xPNxq6GhRfMorCl358QCROxEQtSB8Q6pvUNNOjf8vAGboj_P59VnAT_609N2Yg4jkyc6Bd9vzh1z5927ylt1x4B2TmoFIGJKTY72TK9_kPtpnXr091kxctoWzZ8.a6o1JQrdGOZC3XWhBICL0WwyGJ8TihAzNSv76rdBjaE';
      
//       // Create FormData for multipart/form-data
//       const submitData = new FormData();
//       submitData.append('title', formData.title.trim());
      
//       if (formData.description) {
//         submitData.append('description', formData.description.trim());
//       }
      
//       if (formData.charity) {
//         submitData.append('charity', formData.charity);
//       }
      
//       // Map form type to API deed_type
//       const deedTypeMap = {
//         'regular': 'Regular',
//         'exceptional': 'Special',
//         'volunteer': 'Regular'
//       };
//       submitData.append('deed_type', deedTypeMap[formData.type] || 'Regular');
      
//       if (formData.proof) {
//         submitData.append('proof', formData.proof);
//       }

//       const response = await fetch('https://loveaiapi.vrajtechnosys.in/good-deeds', {
//         method: 'POST',
//         headers: {
//           'token': token,
//           'accept': 'application/json'
//         },
//         body: submitData
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Good deed submitted successfully:', result);
        
//         setSubmitStatus('success');
//         // Reset form
//         setFormData({
//           title: '',
//           description: '',
//           charity: '',
//           type: 'regular',
//           additionalNotes: '',
//           proof: null
//         });
        
//         // Switch to "My Deeds" tab after successful submission
//         setTimeout(() => {
//           setActiveTab('my-deeds');
//           setSubmitStatus(null);
//         }, 2000);
        
//       } else if (response.status === 401) {
//         const errorData = await response.json();
//         console.error('Authorization error:', errorData);
//         setSubmitStatus('auth_error');
        
//       } else if (response.status === 422) {
//         const errorData = await response.json();
//         console.error('Validation error:', errorData);
//         setSubmitStatus('validation_error');
        
//         // Handle specific validation errors
//         if (errorData.errors && errorData.errors.length > 0) {
//           const errorMessages = errorData.errors.map(error => {
//             if (error.body && error.body.length > 0) {
//               return error.body.join(', ');
//             }
//             return JSON.stringify(error);
//           }).join('\n');
//           alert(t('validationErrors') + ':\n' + errorMessages);
//         }
        
//       } else {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//     } catch (error) {
//       console.error('Error submitting good deed:', error);
//       setSubmitStatus('error');
//       alert(t('submitError') || 'Error submitting good deed. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const renderSubmitForm = () => (
//     <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
//       <div className="flex items-center gap-2 mb-6">
//         <Plus className="w-5 h-5 text-sky-600" />
//         <h2 className="text-xl font-semibold">{t('submitProofTitle')}</h2>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-2">{t('goodDeedTitle')}</label>
//           <input
//             type="text"
//             placeholder={t('goodDeedTitlePlaceholder')}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//             value={formData.title}
//             onChange={(e) => handleInputChange('title', e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">{t('description')}</label>
//           <textarea
//             placeholder={t('descriptionPlaceholder')}
//             rows={4}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//             value={formData.description}
//             onChange={(e) => handleInputChange('description', e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">{t('charity')}</label>
//           <select
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//             value={formData.charity}
//             onChange={(e) => handleInputChange('charity', e.target.value)}
//           >
//             <option value="">{t('selectCharity')}</option>
//             <option value="red-cross">{t('redCross')}</option>
//             <option value="unicef">{t('unicef')}</option>
//             <option value="local-charity">{t('localCharity')}</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">{t('typeOfGoodDeed')}</label>
//           <select
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//             value={formData.type}
//             onChange={(e) => handleInputChange('type', e.target.value)}
//           >
//             <option value="regular">{t('regularGoodDeed')}</option>
//             <option value="exceptional">{t('exceptionalGoodDeed')}</option>
//             <option value="volunteer">{t('volunteerWork')}</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">{t('proof')}</label>
//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-sky-400 transition-colors">
//             <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//             <p className="text-sm text-gray-600 mb-1">{t('clickToUpload')}</p>
//             <p className="text-xs text-gray-500">{t('fileTypes')}</p>
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">{t('additionalNotes')}</label>
//           <textarea
//             placeholder={t('additionalNotesPlaceholder')}
//             rows={3}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//             value={formData.additionalNotes}
//             onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-sky-500 text-white py-3 px-6 rounded-md hover:bg-sky-600 transition-colors font-medium"
//         >
//           {t('submitForApproval')}
//         </button>

//         <div className="bg-sky-50 p-4 rounded-md">
//           <p className="text-sm text-sky-800">
//             {t('approvalMessage')}
//           </p>
//         </div>
//       </div>
//     </div>
//   );

//   const renderMyDeeds = () => {
//     const mockDeeds = getMockDeeds();
    
//     return (
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-6">{t('myDeeds')}</h2>
//         <div className="space-y-4">
//           {mockDeeds.map((deed) => (
//             <div key={deed.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-400">
//               <div className="flex justify-between items-start mb-2">
//                 <h3 className="text-lg font-semibold">{deed.title}</h3>
//                 <div className="flex items-center gap-2">
//                   <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
//                     {deed.points} {t('points').toLowerCase()}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 mb-2">
//                 <CheckCircle className="w-4 h-4 text-green-500" />
//                 <span className="text-sm text-green-600 font-medium">{t('approved')}</span>
//                 <span className="text-sm text-gray-500">• {deed.created_at}</span>
//               </div>
//               <p className="text-gray-600 text-sm">{deed.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderAbout = () => (
//     <div className="max-w-4xl mx-auto space-y-8">
//       {/* Feature Cards */}
//       <div className="grid md:grid-cols-4 gap-6">
//         <div className="bg-white rounded-lg p-6 text-center shadow-md">
//           <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
//           <h3 className="font-semibold mb-2">{t('collectGoldHearts')}</h3>
//           <p className="text-sm text-gray-600">{t('collectGoldHeartsDesc')}</p>
//         </div>
//         <div className="bg-white rounded-lg p-6 text-center shadow-md">
//           <Users className="w-12 h-12 text-sky-500 mx-auto mb-4" />
//           <h3 className="font-semibold mb-2">{t('communityVolunteering')}</h3>
//           <p className="text-sm text-gray-600">{t('communityVolunteeringDesc')}</p>
//         </div>
//         <div className="bg-white rounded-lg p-6 text-center shadow-md">
//           <Gift className="w-12 h-12 text-green-500 mx-auto mb-4" />
//           <h3 className="font-semibold mb-2">{t('charityDonations')}</h3>
//           <p className="text-sm text-gray-600">{t('charityDonationsDesc')}</p>
//         </div>
//         <div className="bg-white rounded-lg p-6 text-center shadow-md">
//           <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
//           <h3 className="font-semibold mb-2">{t('socialRecognition')}</h3>
//           <p className="text-sm text-gray-600">{t('socialRecognitionDesc')}</p>
//         </div>
//       </div>

//       {/* How it works */}
//       <div className="bg-sky-50 rounded-lg p-6">
//         <h3 className="text-xl font-semibold mb-4">{t('howItWorks')}</h3>
//         <div className="space-y-3">
//           <div className="flex items-start gap-3">
//             <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">1</span>
//             <p>{t('step1')}</p>
//           </div>
//           <div className="flex items-start gap-3">
//             <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">2</span>
//             <p>{t('step2')}</p>
//           </div>
//           <div className="flex items-start gap-3">
//             <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">3</span>
//             <p>{t('step3')}</p>
//           </div>
//           <div className="flex items-start gap-3">
//             <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">4</span>
//             <p>{t('step4')}</p>
//           </div>
//         </div>
//       </div>

//       {/* Supported file types */}
//       <div className="bg-green-50 rounded-lg p-6">
//         <h3 className="text-xl font-semibold mb-4">{t('supportedFileTypes')}</h3>
//         <div className="grid md:grid-cols-3 gap-4">
//           <div className="flex items-center gap-2">
//             <FileImage className="w-5 h-5 text-green-600" />
//             <span>{t('images')}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FileText className="w-5 h-5 text-green-600" />
//             <span>{t('documents')}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Video className="w-5 h-5 text-green-600" />
//             <span>{t('videos')}</span>
//           </div>
//         </div>
//         <p className="text-sm text-gray-600 mt-3">{t('maxFileSize')}</p>
//       </div>
//     </div>
//   );

//   return (
//     <PolicyLayout>
//       <div className="space-y-8">
//         {/* Header */}
//         <div className="text-center mt-8">
//           {/* Language Selector - Top Right */}
//           <div className="flex justify-end mb-6">
//             <div className="relative">
//               <select
//                 value={i18n.language}
//                 onChange={(e) => handleLanguageChange(e.target.value)}
//                 className="border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm appearance-none bg-white"
//               >
//                 {languages.map((lang) => (
//                   <option key={lang.code} value={lang.code}>
//                     {lang.flag} {lang.name}
//                   </option>
//                 ))}
//               </select>
//               <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>
//           </div>

//           <h1 className="text-4xl font-bold text-gray-900 mb-3">{t('title')}</h1>
//           <p className="text-gray-600 text-lg mb-8">{t('subtitle')}</p>

//           {/* Stats - Centered */}
//           <div className="flex items-center justify-center gap-6 mb-8">
//             <div className="flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3 border border-gray-200">
//               <Heart className="w-5 h-5 text-pink-500" />
//               <span className="font-bold text-lg">17</span>
//               <span className="text-sm text-gray-600">{t('goldHearts')}</span>
//             </div>
//             <div className="flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3 border border-gray-200">
//               <Award className="w-5 h-5 text-sky-500" />
//               <span className="font-bold text-lg">1050</span>
//               <span className="text-sm text-gray-600">{t('points')}</span>
//             </div>
//           </div>

//           {/* Navigation Tabs */}
//           <div className="max-w-2xl mx-auto">
//             <div className="bg-white rounded-full p-2 shadow-sm border border-gray-200">
//               <div className="flex">
//                 {[
//                   { key: 'submit', label: t('submitGoodDeed') },
//                   { key: 'my-deeds', label: t('myDeeds') },
//                   { key: 'about', label: t('about') }
//                 ].map((tab) => (
//                   <button
//                     key={tab.key}
//                     onClick={() => setActiveTab(tab.key)}
//                     className={`flex-1 py-3 px-6 font-medium text-sm transition-all rounded-full ${
//                       activeTab === tab.key
//                         ? 'bg-yellow-300 text-gray-900 shadow-sm'
//                         : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="mt-8">
//           {activeTab === 'submit' && renderSubmitForm()}
//           {activeTab === 'my-deeds' && renderMyDeeds()}
//           {activeTab === 'about' && renderAbout()}
//         </div>
//       </div>
//     </PolicyLayout>
//   );
// };

// export default GoodDeeds;



"use client";
import React, { useState, useEffect } from 'react';
import { Heart, Users, Gift, Award, Plus, Clock, CheckCircle, FileImage, FileText, Video, Upload, Globe, X, Trash2, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import PolicyLayout from '@/components/PolicyLayout';
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
interface GoodDeed {
  id: string;
  title: string;
  description: string;
  charity: string;
  deed_type: 'Regular' | 'Special';
  points: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  proof_url: string;
  created_at: string;
  updated_at: string;
}

interface GoodDeedListResponse {
  count: number;
  list: GoodDeed[];
}

const GoodDeeds = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('submit');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    charity: '',
    type: 'regular',
    additionalNotes: '',
    proof: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // API related state
  const [goodDeeds, setGoodDeeds] = useState<GoodDeed[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedDeed, setSelectedDeed] = useState<GoodDeed | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Language flags
  const languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский' },
    { code: 'he', flag: '🇮🇱', name: 'עברית' }
  ];

  const getToken = () => {
    return localStorage.getItem('authToken') || 'eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0.qslRYMmDzETjy8qvcJLaPb64hpQXsNfy3uK097RvR2kb-s__Y0KAJkoQ4cgBlGl1tgRnuzVHJK2mGU4jV-8tvnQKSIolCW3I.Vdl5o5_3LS0R-YFJY6aq7Q.X92-LANrKZA6e2EmwGQBf9DtBIxCurHw9egCYQxhxmf7DzMb89Wo9S0OIrPmNgJpq4K0g0Crxh5v46RSNijoUkn5AV-hwZuFnuJbVfc7kkbtKlLzeuUBJoHaZKYhFjU6dkKZJVro2cEFghJ-imqz5eEaxJf7vVJqE2YDY5oh1TCyZCq6xPNxq6GhRfMorCl358QCROxEQtSB8Q6pvUNNOjf8vAGboj_P59VnAT_609N2Yg4jkyc6Bd9vzh1z5927ylt1x4B2TmoFIGJKTY72TK9_kPtpnXr091kxctoWzZ8.a6o1JQrdGOZC3XWhBICL0WwyGJ8TihAzNSv76rdBjaE';
  };

  // Fetch good deeds list
  const fetchGoodDeeds = async (start = 0, limit = 20) => {
    setLoading(true);
    try {
      const token = getToken();
      const response = await fetch(`https://loveaiapi.vrajtechnosys.in/good-deeds?start=${start}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'token': token,
          'accept': 'application/json'
        }
      });

      if (response.ok) {
        const data: GoodDeedListResponse = await response.json();
        setGoodDeeds(data.list || []);
      } else if (response.status === 422) {
        const errorData = await response.json();
        console.error('Validation error:', errorData);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching good deeds:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch individual good deed details
  const fetchGoodDeedDetails = async (deedId: string) => {
    setModalLoading(true);
    try {
      const token = getToken();
      const response = await fetch(`https://loveaiapi.vrajtechnosys.in/good-deeds/${deedId}`, {
        method: 'GET',
        headers: {
          'token': token,
          'accept': 'application/json'
        }
      });

      if (response.ok) {
        const data: GoodDeed = await response.json();
        setSelectedDeed(data);
        setShowModal(true);
      } else if (response.status === 422) {
        const errorData = await response.json();
        console.error('Validation error:', errorData);
        alert('Error fetching deed details');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching deed details:', error);
      alert('Error fetching deed details');
    } finally {
      setModalLoading(false);
    }
  };

  // Delete good deed
  const deleteGoodDeed = async (deedId: string) => {
    if (!window.confirm(t('confirmDelete') || 'Are you sure you want to delete this good deed?')) {
      return;
    }

    setDeleteLoading(true);
    try {
      const token = getToken();
      const response = await fetch(`https://loveaiapi.vrajtechnosys.in/good-deeds/${deedId}`, {
        method: 'DELETE',
        headers: {
          'token': token,
          'accept': 'application/json'
        }
      });

      if (response.ok) {
        // Remove the deleted deed from the list
        setGoodDeeds(prev => prev.filter(deed => deed.id !== deedId));
        setShowModal(false);
        setSelectedDeed(null);
        alert(t('deleteSuccess') || 'Good deed deleted successfully');
      } else if (response.status === 422) {
        const errorData = await response.json();
        console.error('Validation error:', errorData);
        alert(t('deleteError') || 'Error deleting good deed');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting good deed:', error);
      alert(t('deleteError') || 'Error deleting good deed');
    } finally {
      setDeleteLoading(false);
    }
  };

  // Load good deeds when switching to my-deeds tab
  useEffect(() => {
    if (activeTab === 'my-deeds') {
      fetchGoodDeeds();
    }
  }, [activeTab]);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const handleInputChange = (field: string, value: string | File) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        alert(t('fileTooLarge') || 'File size must be less than 10MB');
        return;
      }
      
      // Validate file type
      const allowedTypes = [
        'image/jpeg', 'image/png', 'image/webp',
        'application/pdf',
        'video/mp4', 'video/webm', 'video/mov', 'video/quicktime'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        alert(t('invalidFileType') || 'Please select a valid file type (JPG, PNG, WEBP, PDF, MP4, WebM, MOV)');
        return;
      }
      
      handleInputChange('proof', file);
    }
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.title.trim()) {
      alert(t('titleRequired') || 'Title is required');
      return;
    }
    
    if (formData.title.length < 3 || formData.title.length > 200) {
      alert(t('titleLengthError') || 'Title must be between 3 and 200 characters');
      return;
    }
    
    if (formData.description && formData.description.length > 2000) {
      alert(t('descriptionTooLong') || 'Description must be less than 2000 characters');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const token = getToken();
      
      // Create FormData for multipart/form-data
      const submitData = new FormData();
      submitData.append('title', formData.title.trim());
      
      if (formData.description) {
        submitData.append('description', formData.description.trim());
      }
      
      if (formData.charity) {
        submitData.append('charity', formData.charity);
      }
      
      // Map form type to API deed_type
      const deedTypeMap = {
        'regular': 'Regular',
        'exceptional': 'Special',
        'volunteer': 'Regular'
      };
      submitData.append('deed_type', deedTypeMap[formData.type] || 'Regular');
      
      if (formData.proof) {
        submitData.append('proof', formData.proof);
      }

      const response = await fetch('https://loveaiapi.vrajtechnosys.in/good-deeds', {
        method: 'POST',
        headers: {
          'token': token,
          'accept': 'application/json'
        },
        body: submitData
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Good deed submitted successfully:', result);
        
        setSubmitStatus('success');
        // Reset form
        setFormData({
          title: '',
          description: '',
          charity: '',
          type: 'regular',
          additionalNotes: '',
          proof: null
        });
        
        // Switch to "My Deeds" tab after successful submission
        setTimeout(() => {
          setActiveTab('my-deeds');
          setSubmitStatus(null);
        }, 2000);
        
      } else if (response.status === 401) {
        const errorData = await response.json();
        console.error('Authorization error:', errorData);
        setSubmitStatus('auth_error');
        
      } else if (response.status === 422) {
        const errorData = await response.json();
        console.error('Validation error:', errorData);
        setSubmitStatus('validation_error');
        
        // Handle specific validation errors
        if (errorData.errors && errorData.errors.length > 0) {
          const errorMessages = errorData.errors.map(error => {
            if (error.body && error.body.length > 0) {
              return error.body.join(', ');
            }
            return JSON.stringify(error);
          }).join('\n');
          alert(t('validationErrors') + ':\n' + errorMessages);
        }
        
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
    } catch (error) {
      console.error('Error submitting good deed:', error);
      setSubmitStatus('error');
      alert(t('submitError') || 'Error submitting good deed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'text-green-600 bg-green-100';
      case 'Rejected':
        return 'text-red-600 bg-red-100';
      case 'Pending':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Rejected':
        return <X className="w-4 h-4 text-red-500" />;
      case 'Pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  // Modal Component
  const GoodDeedModal = () => {
    if (!showModal || !selectedDeed) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">{t('goodDeedDetails') || 'Good Deed Details'}</h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedDeed(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('goodDeedTitle') || 'Title'}
                </label>
                <p className="text-gray-900">{selectedDeed.title}</p>
              </div>

              {selectedDeed.description && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('description') || 'Description'}
                  </label>
                  <p className="text-gray-900">{selectedDeed.description}</p>
                </div>
              )}

              {selectedDeed.charity && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('charity') || 'Charity'}
                  </label>
                  <p className="text-gray-900">{selectedDeed.charity}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('typeOfGoodDeed') || 'Type'}
                  </label>
                  <p className="text-gray-900">{selectedDeed.deed_type}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('points') || 'Points'}
                  </label>
                  <p className="text-gray-900">{selectedDeed.points}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('status') || 'Status'}
                </label>
                <div className="flex items-center gap-2">
                  {getStatusIcon(selectedDeed.status)}
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedDeed.status)}`}>
                    {selectedDeed.status}
                  </span>
                </div>
              </div>

              {selectedDeed.proof_url && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('proof') || 'Proof'}
                  </label>
                  <a
                    href={selectedDeed.proof_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-800 underline"
                  >
                    {t('viewProof') || 'View Proof'}
                  </a>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <label className="block font-medium mb-1">
                    {t('createdAt') || 'Created'}
                  </label>
                  <p>{formatDate(selectedDeed.created_at)}</p>
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    {t('updatedAt') || 'Updated'}
                  </label>
                  <p>{formatDate(selectedDeed.updated_at)}</p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedDeed(null);
                }}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                {t('close') || 'Close'}
              </button>
              <button
                onClick={() => deleteGoodDeed(selectedDeed.id)}
                disabled={deleteLoading}
                className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {deleteLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
                {t('delete') || 'Delete'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSubmitForm = () => (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-10">
      <div className="flex items-center gap-2 mb-6">
        <Plus className="w-5 h-5 text-sky-600" />
        <h2 className="text-xl font-semibold">{t('submitProofTitle')}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">{t('goodDeedTitle')}</label>
          <input
            type="text"
            placeholder={t('goodDeedTitlePlaceholder')}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('description')}</label>
          <textarea
            placeholder={t('descriptionPlaceholder')}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('charity')}</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={formData.charity}
            onChange={(e) => handleInputChange('charity', e.target.value)}
          >
            <option value="">{t('selectCharity')}</option>
            <option value="red-cross">{t('redCross')}</option>
            <option value="unicef">{t('unicef')}</option>
            <option value="local-charity">{t('localCharity')}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('typeOfGoodDeed')}</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={formData.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
          >
            <option value="regular">{t('regularGoodDeed')}</option>
            <option value="exceptional">{t('exceptionalGoodDeed')}</option>
            <option value="volunteer">{t('volunteerWork')}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('proof')}</label>
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-sky-400 transition-colors">
            <input
              type="file"
              onChange={handleFileUpload}
              accept="image/*,application/pdf,video/*"
              className="hidden"
              id="proof-upload"
            />
            <label htmlFor="proof-upload" className="cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">{t('clickToUpload')}</p>
              <p className="text-xs text-gray-500">{t('fileTypes')}</p>
              {formData.proof && (
                <p className="text-sm text-green-600 mt-2">
                  {t('fileSelected')}: {formData.proof.name}
                </p>
              )}
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('additionalNotes')}</label>
          <textarea
            placeholder={t('additionalNotesPlaceholder')}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={formData.additionalNotes}
            onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-sky-500 text-white py-3 px-6 rounded-2xl hover:bg-sky-600 transition-colors font-medium disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              {t('submitting') || 'Submitting...'}
            </>
          ) : (
            t('submitForApproval')
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 p-4 rounded-md">
            <p className="text-sm text-green-800">
              {t('submitSuccess') || 'Good deed submitted successfully!'}
            </p>
          </div>
        )}

        <div className="bg-sky-50 p-4 rounded-md">
          <p className="text-sm text-sky-800">
            {t('approvalMessage')}
          </p>
        </div>
      </div>
    </div>
  );

  const renderMyDeeds = () => {
    return (
      <div className="max-w-4xl mx-auto mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t('myDeeds')}</h2>
          <button
            onClick={() => fetchGoodDeeds()}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 text-sky-600 bg-sky-50 rounded-md hover:bg-sky-100 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            )}
            {t('refresh') || 'Refresh'}
          </button>
        </div>

        {loading && goodDeeds.length === 0 ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : goodDeeds.length === 0 ? (
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-gray-600">{t('noDeeds') || 'No good deeds found. Submit your first good deed!'}</p>
            <button
              onClick={() => setActiveTab('submit')}
              className="mt-4 px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors"
            >
              {t('submitGoodDeed') || 'Submit Good Deed'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {goodDeeds.map((deed) => (
              <div key={deed.id} className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-sky-400">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{deed.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
                      {deed.points} {t('points').toLowerCase()}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  {getStatusIcon(deed.status)}
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(deed.status)}`}>
                    {deed.status}
                  </span>
                  <span className="text-sm text-gray-500">• {formatDate(deed.created_at)}</span>
                </div>

                {deed.description && (
                  <p className="text-gray-600 text-sm mb-3">{deed.description}</p>
                )}

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => fetchGoodDeedDetails(deed.id)}
                    disabled={modalLoading}
                    className="flex items-center gap-1 px-3 py-1 text-sky-600 bg-sky-50 rounded-md hover:bg-sky-100 transition-colors text-sm disabled:opacity-50"
                  >
                    {modalLoading ? (
                      <div className="w-3 h-3 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Eye className="w-3 h-3" />
                    )}
                    {t('viewDetails') || 'View Details'}
                  </button>
                  
                  <button
                    onClick={() => fetchGoodDeedDetails(deed.id)}
                    className="flex items-center gap-1 px-3 py-1 text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors text-sm"
                  >
                    <Trash2 className="w-3 h-3" />
                    {t('delete') || 'Delete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderAbout = () => (
    <div className="max-w-4xl mx-auto space-y-8 mb-10">
      {/* Feature Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 text-center shadow-md">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">{t('collectGoldHearts')}</h3>
          <p className="text-sm text-gray-600">{t('collectGoldHeartsDesc')}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-md">
          <Users className="w-12 h-12 text-sky-500 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">{t('communityVolunteering')}</h3>
          <p className="text-sm text-gray-600">{t('communityVolunteeringDesc')}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-md">
          <Gift className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">{t('charityDonations')}</h3>
          <p className="text-sm text-gray-600">{t('charityDonationsDesc')}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-md">
          <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">{t('socialRecognition')}</h3>
          <p className="text-sm text-gray-600">{t('socialRecognitionDesc')}</p>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-sky-50 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">{t('howItWorks')}</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">1</span>
            <p>{t('step1')}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">2</span>
            <p>{t('step2')}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">3</span>
            <p>{t('step3')}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">4</span>
            <p>{t('step4')}</p>
          </div>
        </div>
      </div>

      {/* Supported file types */}
      <div className="bg-green-50 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">{t('supportedFileTypes')}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <FileImage className="w-5 h-5 text-green-600" />
            <span>{t('images')}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            <span>{t('documents')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-green-600" />
            <span>{t('videos')}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-3">{t('maxFileSize')}</p>
      </div>
    </div>
  );

  return (
    <PolicyLayout>
       <AccessibilityProvider>
                                  <AccessibilityWidget/>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mt-20">
      

          <h1 className="text-4xl font-bold text-gray-900 mb-3 mt-8">{t('title')}</h1>
          <p className="text-gray-600 text-lg mb-8">{t('subtitle')}</p>

          {/* Stats - Centered */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3 border border-gray-200">
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="font-bold text-lg">17</span>
              <span className="text-sm text-gray-600">{t('goldHearts')}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3 border border-gray-200">
              <Award className="w-5 h-5 text-sky-500" />
              <span className="font-bold text-lg">1050</span>
              <span className="text-sm text-gray-600">{t('points')}</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-full p-2 shadow-sm border border-gray-200">
              <div className="flex">
                {[
                  { key: 'submit', label: t('submitGoodDeed') },
                  { key: 'my-deeds', label: t('myDeeds') },
                  { key: 'about', label: t('about') }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 py-3 px-6 font-medium text-sm transition-all rounded-full ${
                      activeTab === tab.key
                        ? 'bg-sky-500 text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8">
          {activeTab === 'submit' && renderSubmitForm()}
          {activeTab === 'my-deeds' && renderMyDeeds()}
          {activeTab === 'about' && renderAbout()}
        </div>
      </div>

      {/* Modal */}
      <GoodDeedModal />
      </AccessibilityProvider>
    </PolicyLayout>
  );
};

export default GoodDeeds;