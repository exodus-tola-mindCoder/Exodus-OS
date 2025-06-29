'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, Video, MessageCircle, CheckCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MeetingType {
  id: string;
  title: string;
  description: string;
  duration: number;
  price: string;
  icon: any;
  color: string;
  popular?: boolean;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

const meetingTypes: MeetingType[] = [
  {
    id: 'consultation',
    title: 'Free Consultation',
    description: 'Discuss your project requirements and get initial recommendations',
    duration: 30,
    price: 'Free',
    icon: MessageCircle,
    color: 'from-green-500 to-teal-500',
    popular: true
  },
  {
    id: 'technical-review',
    title: 'Technical Review',
    description: 'Code review, architecture discussion, and technical guidance',
    duration: 60,
    price: '$100',
    icon: User,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'project-planning',
    title: 'Project Planning Session',
    description: 'Detailed project scoping, timeline, and resource planning',
    duration: 90,
    price: '$150',
    icon: Calendar,
    color: 'from-purple-500 to-violet-500'
  }
];

const timeSlots: TimeSlot[] = [
  { time: '09:00 AM', available: true },
  { time: '10:30 AM', available: false },
  { time: '12:00 PM', available: true },
  { time: '02:00 PM', available: true },
  { time: '03:30 PM', available: false },
  { time: '05:00 PM', available: true }
];

export default function CalendarBookingWindow() {
  const [selectedMeeting, setSelectedMeeting] = useState<MeetingType | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [step, setStep] = useState<'type' | 'datetime' | 'details' | 'confirmation'>('type');

  const handleBooking = () => {
    // Simulate booking process
    setStep('confirmation');
  };

  if (step === 'confirmation') {
    return (
      <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"
          >
            <CheckCircle className="w-8 h-8 text-green-600" />
          </motion.div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Meeting Scheduled!</h2>
            <p className="text-gray-600">Your meeting has been successfully booked.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-left">
            <h3 className="font-semibold text-gray-900 mb-3">Meeting Details:</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Type:</strong> {selectedMeeting?.title}</p>
              <p><strong>Duration:</strong> {selectedMeeting?.duration} minutes</p>
              <p><strong>Date:</strong> {selectedDate}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Platform:</strong> Google Meet (link will be sent via email)</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              📧 A calendar invitation and meeting link have been sent to your email.
            </p>
            <p className="text-sm text-gray-600">
              💬 Feel free to prepare any questions or materials you'd like to discuss.
            </p>
          </div>

          <Button 
            onClick={() => setStep('type')}
            className="w-full"
          >
            Schedule Another Meeting
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Schedule a Meeting</h2>
            <p className="text-gray-600 text-sm">Book a time to discuss your project or get technical guidance</p>
          </div>
        </div>
      </div>

      {/* Step 1: Meeting Type Selection */}
      {step === 'type' && (
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Choose Meeting Type</h3>
          <div className="space-y-3">
            {meetingTypes.map((meeting, index) => (
              <motion.div
                key={meeting.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setSelectedMeeting(meeting);
                  setStep('datetime');
                }}
                className={`bg-gradient-to-br ${meeting.color.replace('500', '50')} p-4 rounded-lg border border-gray-200 cursor-pointer hover:shadow-md transition-all duration-200 relative`}
              >
                {meeting.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs">
                    Popular
                  </Badge>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${meeting.color} rounded-lg flex items-center justify-center`}>
                    <meeting.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{meeting.title}</h4>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{meeting.price}</p>
                        <p className="text-xs text-gray-600">{meeting.duration} min</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{meeting.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Date & Time Selection */}
      {step === 'datetime' && selectedMeeting && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">Select Date & Time</h3>
            <Button variant="outline" size="sm" onClick={() => setStep('type')}>
              Back
            </Button>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Selected: {selectedMeeting.title}</h4>
            <div className="flex items-center space-x-4 text-sm text-blue-800">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{selectedMeeting.duration} minutes</span>
              </div>
              <div className="flex items-center space-x-1">
                <Video className="w-4 h-4" />
                <span>Google Meet</span>
              </div>
              <span className="font-semibold">{selectedMeeting.price}</span>
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <h4 className="font-medium text-gray-800 mb-3">Available Dates</h4>
            <div className="grid grid-cols-3 gap-2">
              {['Today', 'Tomorrow', 'Dec 20', 'Dec 21', 'Dec 22', 'Dec 23'].map((date, index) => (
                <Button
                  key={date}
                  variant={selectedDate === date ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDate(date)}
                  className="text-xs"
                >
                  {date}
                </Button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Available Times (EAT)</h4>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot, index) => (
                  <Button
                    key={slot.time}
                    variant={selectedTime === slot.time ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className="text-xs"
                  >
                    {slot.time}
                    {!slot.available && ' (Booked)'}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {selectedDate && selectedTime && (
            <Button onClick={() => setStep('details')} className="w-full">
              Continue to Details
            </Button>
          )}
        </div>
      )}

      {/* Step 3: Contact Details */}
      {step === 'details' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">Your Details</h3>
            <Button variant="outline" size="sm" onClick={() => setStep('datetime')}>
              Back
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Description
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Brief description of your project or what you'd like to discuss..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time Zone
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>East Africa Time (EAT)</option>
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
          </div>

          <Button onClick={handleBooking} className="w-full">
            Confirm Booking
          </Button>
        </div>
      )}
    </div>
  );
}