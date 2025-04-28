// pages/yourpage.tsx
import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { getInterviewByUserId, getLatestInterviews } from '@/lib/actions/general.action'
import Image from 'next/image'
import ButtonWithLoader from '@/components/ButtonWithLoader' // Importing the ButtonWithLoader component

const page = async () => {
  const user =  await getCurrentUser();
  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({userId : user?.id!})
  ])
  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length>0;

  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>Practice on real interview questions & get instant feedback</p>
          <ButtonWithLoader href='/interview' className='btn-primary max-sm:w-full'>
            Start an Interview
          </ButtonWithLoader>
        </div>
        <Image
          src="/robot.png"
          alt='robot'
          width={400}
          height={400}
          className='max-sm:hidden'
        />
      </section>
      
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          {
            hasPastInterviews ? userInterviews.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            )) : (
              <div className='flex flex-col gap-4'>
                <p className='text-lg'>You have not taken any interviews yet</p>
                <ButtonWithLoader href='/interview' className='btn-primary max-sm:w-full'>
                  Start an Interview
                </ButtonWithLoader>
              </div>
            )
          }
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div className='interviews-section'>
          {
            hasUpcomingInterviews ? latestInterviews.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            )) : (
              <div className='flex flex-col gap-4'>
                <p className='text-lg'>No latest Interview available</p>
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}

export default page
