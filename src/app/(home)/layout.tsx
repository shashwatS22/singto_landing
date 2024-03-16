import SmoothScrolling from "@/components/smooth-scrollings";


const HomeLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        
      <div className='h-full w-full'>            
            <SmoothScrolling> {children}</SmoothScrolling>
        </div>    
    );
};

export default HomeLayout;