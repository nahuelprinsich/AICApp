export type EventData = {
    id: string;
    title: string;
    description: string;
    location: string;
    image_url: string;
    end_date: string;
    is_free: boolean;
};

export type Event = {
    data: EventData;
};