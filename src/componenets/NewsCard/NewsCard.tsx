import { useRef, useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Chip, IconButton } from '@mui/material';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { newsItems } from './NewsData';
import { newsStyles } from './NewsCard.styles';

export const NewsCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <Box>
      {/* Header Section */}
      <Box sx={newsStyles.headerBox}>
        <Typography variant="h6" sx={newsStyles.headerTitle}>
          News from DevelopersBay
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stay updated with upcoming events, membership offers and new features
        </Typography>
      </Box>

      {/* Scrollable Cards Container */}
      <Box sx={newsStyles.containerBox}>
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <IconButton
            onClick={() => scroll('left')}
            sx={newsStyles.scrollButton('left')}
          >
            <ChevronLeft size={16} />
          </IconButton>
        )}

        {/* Cards Scroll Box */}
        <Box
          ref={scrollRef}
          onScroll={checkScroll}
          sx={newsStyles.scrollBox}
        >
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            
            return (
              <Card key={item.id} sx={newsStyles.card}>
                {/* Card Image with Badge */}
                <Box sx={newsStyles.imageBox}>
                  <CardMedia
                    component="img"
                    className="news-image"
                    image={item.image}
                    alt={item.title}
                    sx={newsStyles.cardImage}
                  />
                  <Chip
                    label={item.badge}
                    size="small"
                    sx={newsStyles.badge(item.badgeColor)}
                  />
                </Box>

                {/* Card Content */}
                <CardContent sx={newsStyles.cardContent}>
                  {/* Title with Icon */}
                  <Box sx={newsStyles.titleBox}>
                    <IconComponent size={16} color="#6b7280" />
                    <Typography variant="body2" sx={newsStyles.title}>
                      {item.title}
                    </Typography>
                  </Box>

                  {/* Date and Location */}
                  {item.date && item.location && (
                    <Box sx={newsStyles.dateLocationBox}>
                      <Box sx={newsStyles.infoItem}>
                        <Calendar size={12} />
                        <Typography variant="caption">{item.date}</Typography>
                      </Box>
                      <Box sx={newsStyles.infoItem}>
                        <MapPin size={12} />
                        <Typography variant="caption">{item.location}</Typography>
                      </Box>
                    </Box>
                  )}

                  {/* Subtitle */}
                  {item.subtitle && (
                    <Typography variant="caption" color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* Right Scroll Button */}
        {canScrollRight && (
          <IconButton
            onClick={() => scroll('right')}
            sx={newsStyles.scrollButton('right')}
          >
            <ChevronRight size={16} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};