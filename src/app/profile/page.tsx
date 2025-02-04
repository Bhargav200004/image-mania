import ProfileConnect from "@/components/profile/profile_connect";
import ProfileName from "@/components/profile/profile_name";
import ProfileTag from "@/components/profile/profile_tag";
import { Button } from "@/components/ui/button";
import { MessageSquare } from 'lucide-react';
import { UserRound } from 'lucide-react';
export default function Profile() {
  return (
    <main>
      <div className="h-screen  flex items-center justify-center bg-yellow-400  px-32 ">
        <div className="w-full bg-cyan-200 rounded-2xl py-12 flex flex-col gap-10">
        <div className="flex flex-row w-full  place-content-between items-center px-4">
          <ProfileConnect name="Connect" icon = {UserRound}/>
          <div className="rounded-full bg-black h-40 w-40">
          </div>
          <ProfileConnect name="Message" icon = {MessageSquare }/>
        </div>
          <div>
            <ProfileName name="Rahul Yadav" country="India" state="Bihar" />
          </div>
          <div className="flex flex-cols gap-8 place-content-center">
            <ProfileTag tags="20" title="Freiends" />
            <ProfileTag tags="30" title="Photos" />
          </div>
          <div className="flex flex-cols place-content-center">
          <Button className="rounded-full px-6">
            Show More
          </Button>
          </div> 
        </div>
      </div>
    </main>
  );
}
