import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ActivityCard = ({ title, description, href }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={() => window.location.href = href}>
          Explore {title.split(" ")[0]}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard; 