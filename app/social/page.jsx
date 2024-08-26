"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function SocialPage() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Social Activities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mx-8">
        {/* Books Section */}
        <Card>
          <CardHeader>
            <CardTitle>Books I&apos;ve Read</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Check out the books I&apos;ve been reading recently.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={() => window.location.href = "/social/book"}>
              Explore Books
            </Button>
          </CardFooter>
        </Card>

        {/* Movies Section */}
        <Card>
          <CardHeader>
            <CardTitle>Movies I&apos;ve Watched</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Find out what movies I&apos;ve watched.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={() => window.location.href = "/social/movies"}>
              Explore Movies
            </Button>
          </CardFooter>
        </Card>

        {/* Theaters Section */}
        <Card>
          <CardHeader>
            <CardTitle>Theaters and Plays</CardTitle>
          </CardHeader>
          <CardContent>
            <p>See the theaters and plays I&apos;ve attended.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={() => window.location.href = "/social/theaters"}>
              Explore Theaters
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
