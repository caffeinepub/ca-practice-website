import { useGetAllNotifications } from '@/hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Bell } from 'lucide-react';
import { NotificationCategory } from '@/backend';

const Notifications = () => {
  const { data: notifications, isLoading } = useGetAllNotifications();

  const getCategoryLabel = (category: NotificationCategory): string => {
    const labels: Record<NotificationCategory, string> = {
      [NotificationCategory.IncomeTax]: 'Income Tax',
      [NotificationCategory.FinanceBill]: 'Finance Bill',
      [NotificationCategory.Budget]: 'Budget',
      [NotificationCategory.GST]: 'GST',
      [NotificationCategory.Customs]: 'Customs',
      [NotificationCategory.SEEPZ_SEZ]: 'SEEPZ-SEZ',
      [NotificationCategory.SEBI]: 'SEBI',
      [NotificationCategory.FinanceMarket]: 'Finance Market',
    };
    return labels[category];
  };

  const getCategoryColor = (category: NotificationCategory): string => {
    const colors: Record<NotificationCategory, string> = {
      [NotificationCategory.IncomeTax]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      [NotificationCategory.FinanceBill]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      [NotificationCategory.Budget]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      [NotificationCategory.GST]: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      [NotificationCategory.Customs]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      [NotificationCategory.SEEPZ_SEZ]: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      [NotificationCategory.SEBI]: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      [NotificationCategory.FinanceMarket]: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
    };
    return colors[category];
  };

  const formatDate = (timestamp: bigint): string => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <section id="notifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/assets/generated/notification-icon.dim_128x128.png"
              alt="Notifications"
              className="w-12 h-12"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Government Notifications & Circulars
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest circulars and notifications from Indian regulatory bodies
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                  <Skeleton className="h-6 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : notifications && notifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notifications.map((notification) => (
              <Card key={notification.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge className={getCategoryColor(notification.category)}>
                      {getCategoryLabel(notification.category)}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(notification.timestamp)}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-primary">{notification.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-4">{notification.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No notifications available at the moment</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Notifications;
