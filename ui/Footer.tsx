'use client';

export default function Footer({
  reactVersion,
  nextVersion,
}: {
  reactVersion: string;
  nextVersion: string;
}) {
  return (
      <div className="flex flex-col items-start justify-start px-8 py-16" style={{width: 1280, height: 437,}}>
          <div className="flex flex-col items-start justify-start pb-8" style={{width: 1216, height: 252,}}>
              <div className="inline-flex space-x-8 items-start justify-end" style={{width: 1216, height: 220,}}>
                  <div className="flex space-x-8 items-center justify-end" style={{width: 800, height: 220,}}>
                      <div className="flex space-x-8 items-start justify-end w-96 h-full pb-10">
                          <div className="inline-flex flex-col space-y-4 items-start justify-start w-44">
                              <p className="w-full text-sm font-semibold tracking-wider leading-tight text-gray-400 uppercase">Solutions</p>
                              <div className="flex flex-col space-y-4 items-start justify-start w-full">
                                  <p className="text-base leading-normal text-gray-300">Marketing</p>
                                  <p className="text-base leading-normal text-gray-300">Analytics</p>
                                  <p className="text-base leading-normal text-gray-300">Commerce</p>
                                  <p className="text-base leading-normal text-gray-300">Insights</p>
                              </div>
                          </div>
                          <div className="inline-flex flex-col space-y-4 items-start justify-start w-44">
                              <p className="w-full text-sm font-semibold tracking-wider leading-tight text-gray-400 uppercase">Support</p>
                              <div className="flex flex-col space-y-4 items-start justify-start w-full">
                                  <p className="text-base leading-normal text-gray-300">Pricing</p>
                                  <p className="text-base leading-normal text-gray-300">Documentation</p>
                                  <p className="text-base leading-normal text-gray-300">Guides</p>
                                  <p className="text-base leading-normal text-gray-300">API Status</p>
                              </div>
                          </div>
                      </div>
                      <div className="flex space-x-8 items-start justify-end w-96 h-full">
                          <div className="inline-flex flex-col space-y-4 items-start justify-start w-44">
                              <p className="w-full text-sm font-semibold tracking-wider leading-tight text-gray-400 uppercase">Company</p>
                              <div className="flex flex-col space-y-4 items-start justify-start w-full">
                                  <p className="text-base leading-normal text-gray-300">About</p>
                                  <p className="text-base leading-normal text-gray-300">Blog</p>
                                  <p className="text-base leading-normal text-gray-300">Jobs</p>
                                  <p className="text-base leading-normal text-gray-300">Press</p>
                                  <p className="text-base leading-normal text-gray-300">Partners</p>
                              </div>
                          </div>
                          <div className="inline-flex flex-col space-y-4 items-start justify-start w-44">
                              <p className="w-full text-sm font-semibold tracking-wider leading-tight text-gray-400 uppercase">Legal</p>
                              <div className="flex flex-col space-y-4 items-start justify-start w-full">
                                  <p className="text-base leading-normal text-gray-300">Claim</p>
                                  <p className="text-base leading-normal text-gray-300">Privacy</p>
                                  <p className="text-base leading-normal text-gray-300">Terms</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="inline-flex flex-col space-y-4 items-start justify-start w-96">
                      <div className="flex flex-col space-y-4 items-start justify-start w-full">
                          <p className="w-full text-sm font-semibold tracking-wider leading-tight text-gray-400 uppercase">Subscribe to our newsletter</p>
                          <p className="w-full text-base leading-normal text-gray-300">The latest news, articles, and resources, sent to your inbox weekly.</p>
                      </div>
                      <div className="inline-flex space-x-3 items-start justify-start w-full">
                          <input className="text-base leading-normal text-gray-500 flex-1 px-3 py-2 bg-white border rounded-md border-white" placeholder="Enter your email"></input>
                          <div className="flex items-center justify-center px-4 py-2 bg-indigo-500 rounded-md">
                              <p className="text-base font-medium leading-normal text-white">Subscribe</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="flex flex-col items-start justify-start" style={{width: 1216, height: 57,}}>
              <div className="bg-gray-600" style={{width: 1216, height: 1,}}/>
              <div className="inline-flex space-x-8 items-start justify-between pt-8" style={{width: 1216, height: 56,}}>
                  <p className="w-1/4 text-base leading-normal text-gray-400">© 2020 Workflow, Inc. All rights reserved.</p>
                  <div className="flex space-x-6 items-center justify-start">
                      <img className="flex-1 h-full rounded-lg" src="https://via.placeholder.com/24x24"/>
                      <img className="flex-1 h-full rounded-lg" src="https://via.placeholder.com/24x24"/>
                      <img className="flex-1 h-full rounded-lg" src="https://via.placeholder.com/24x24"/>
                      <img className="flex-1 h-full rounded-lg" src="https://via.placeholder.com/24x24"/>
                      <img className="flex-1 h-full rounded-lg" src="https://via.placeholder.com/24x24"/>
                  </div>
              </div>
          </div>

      <div className="flex space-x-6 text-sm text-zinc-600">
        <div>React: {reactVersion}</div>
        <div>Next: {nextVersion}</div>
      </div>
    </div>
  );
}
