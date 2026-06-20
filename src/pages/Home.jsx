import React from 'react'
import LiquidEther from '../components/LiquidEther';
import { useNavigate } from 'react-router';
const Home = () => {
    const navigate = useNavigate()
    return (
        <div>

            <div className='w-full h-screen relative bg-black'>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B497CF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                    color0="#5227FF"
                    color1="#FF9FFC"
                    color2="#B497CF"
                />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                <h1 className="text-white text-4xl font-bold">
                    AI-Powered Developer Assistant
                </h1>
                <h1 className='text-white text-3xl font-bold'>Your Personal AI Code Reviewer.</h1>
                <p className='text-white max-w-150 text-xl'>CodePilot analyzes your code in real time, detects issues, suggests improvements, and helps you write cleaner, more efficient code before deployment.</p>
                <div className='text-white inset-0 gap-8 flex'>
                    <button 
                    onClick={()=>navigate('/Editorpage')}
                    className='bg-zinc-700 py-3 px-5 rounded font-bold'>Get Started</button>
                    <button 
                    onClick={()=>navigate('/Features')}
                    className='bg-zinc-700 py-3 px-5 rounded font-bold'>Explore Features</button>
                </div>
            </div>


        </div>
    )
}

export default Home