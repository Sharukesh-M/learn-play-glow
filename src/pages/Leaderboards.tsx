
import React, { useEffect, useState } from "react";
import {
  Card, 
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Medal, Award, Clock, Calendar } from "lucide-react";
import { generateMockLeaderboard, generateMockQuizzes } from "@/utils/mockData";
import { LeaderboardEntry } from "@/types/quiz";

const Leaderboards = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [timeFilter, setTimeFilter] = useState("all-time");
  const quizzes = generateMockQuizzes();

  useEffect(() => {
    // In a real app, you would fetch this data from your backend
    setLeaderboard(generateMockLeaderboard());
  }, [timeFilter]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const getLeaderboardIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-700" />;
      default:
        return <Award className="h-6 w-6 text-muted-foreground" />;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Leaderboards</h1>
      <p className="text-muted-foreground mb-8">
        See who's leading in points and quiz mastery
      </p>

      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold">Global Rankings</h2>
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-time">All Time</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="today">Today</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card>
          <CardHeader className="bg-muted/30 flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Top Performers</CardTitle>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span className="capitalize">{timeFilter.replace("-", " ")}</span>
            </div>
          </CardHeader>
          <CardContent className="px-0">
            <div className="rounded-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-medium">Rank</th>
                    <th className="text-left p-4 font-medium">User</th>
                    <th className="text-right p-4 font-medium">Score</th>
                    <th className="text-right p-4 font-medium hidden md:table-cell">Last Quiz</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry) => (
                    <tr key={entry.userId} className="border-t border-border hover:bg-muted/20">
                      <td className="p-4 text-left">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            {getLeaderboardIcon(entry.position)}
                          </span>
                          <span className="font-semibold">{entry.position}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <div className="font-medium">{entry.username}</div>
                        </div>
                      </td>
                      <td className="p-4 text-right font-mono font-semibold">{entry.score.toLocaleString()}</td>
                      <td className="p-4 text-right hidden md:table-cell text-muted-foreground">
                        <div className="flex items-center justify-end gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(entry.completedAt.toString())}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Leaderboards by Category</h2>
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              {["Science", "Math", "History", "Geography", "Technology"].map((category) => (
                <TabsTrigger key={category} value={category.toLowerCase()}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {quizzes.slice(0, 3).map((quiz) => (
                  <Card key={quiz.id}>
                    <CardHeader className={`bg-gradient-to-br ${quiz.thumbnailColor} text-white`}>
                      <CardTitle className="text-white">{quiz.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {generateMockLeaderboard()
                          .slice(0, 3)
                          .map((entry) => (
                            <div
                              key={`${quiz.id}-${entry.userId}`}
                              className="flex items-center justify-between border-b border-border pb-2 last:border-0"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  {entry.position === 1 ? (
                                    <Trophy className="h-5 w-5 text-yellow-500" />
                                  ) : entry.position === 2 ? (
                                    <Trophy className="h-4 w-4 text-gray-400" />
                                  ) : (
                                    <Trophy className="h-4 w-4 text-amber-700" />
                                  )}
                                </div>
                                <span className="font-medium">{entry.username}</span>
                              </div>
                              <span className="font-mono font-semibold">
                                {(entry.score / 10).toLocaleString()}
                              </span>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {["Science", "Math", "History", "Geography", "Technology"].map((category) => (
              <TabsContent key={category} value={category.toLowerCase()} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {quizzes
                    .filter((q) => q.category === category)
                    .map((quiz) => (
                      <Card key={quiz.id}>
                        <CardHeader className={`bg-gradient-to-br ${quiz.thumbnailColor} text-white`}>
                          <CardTitle className="text-white">{quiz.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            {generateMockLeaderboard()
                              .slice(0, 3)
                              .map((entry) => (
                                <div
                                  key={`${quiz.id}-${entry.userId}`}
                                  className="flex items-center justify-between border-b border-border pb-2 last:border-0"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                      {entry.position === 1 ? (
                                        <Trophy className="h-5 w-5 text-yellow-500" />
                                      ) : entry.position === 2 ? (
                                        <Trophy className="h-4 w-4 text-gray-400" />
                                      ) : (
                                        <Trophy className="h-4 w-4 text-amber-700" />
                                      )}
                                    </div>
                                    <span className="font-medium">{entry.username}</span>
                                  </div>
                                  <span className="font-mono font-semibold">
                                    {(entry.score / 10).toLocaleString()}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;
