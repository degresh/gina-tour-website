import { Schedule } from "@/app/lib/entity/schedule";
import { ScheduleCreateRequest } from "@/app/lib/entity/schedule-create-request";
import { QueryResultRow, sql } from "@vercel/postgres";

const ITEMS_PER_PAGE: number = 10;

export async function createSchedule(data: ScheduleCreateRequest): Promise<boolean> {
    try {
        const query = await sql`
            INSERT INTO schedule (date, quota)
            VALUES (${data.date}, ${data.quota})
            RETURNING id
        `;

        const scheduleId =  Number(query.rows[0].id);
        for (const member of data.members) {
            await sql`
                INSERT INTO schedule_member(schedule_id, registration_id)
                VALUES (${scheduleId}, ${member})
            `;
        }

        return true
    } catch (error) {
        console.error("[SCHEDULE] Database Error", error);
        return false;
    }
}

export async function getPagedSchedules(page: number): Promise<Schedule[] | null> {
    try {
        const query = await sql`
            SELECT 
                schedule.id,
                schedule.date,
                schedule.quota,
                (SELECT COUNT(*) FROM schedule_member WHERE schedule_id = schedule.id) AS schedule_member_count
            FROM schedule
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset(page)}
        `;
        return query.rows.map(convertRowToSchedule);
    } catch (error) {
        console.error("[SCHEDULE] Database Error", error);
        return null;
    }
}

export async function getSchedulePages(): Promise<number> {
    try {
        const query = await sql`
            SELECT COUNT(*) FROM schedule
        `;

        return Math.ceil(Number(query.rows[0].count) / ITEMS_PER_PAGE)
    } catch (error) {
        console.error("[SCHEDULE] Database Error", error);
        return 0;
    }
}

/**
 * Internal methods
 */

function offset(currentPage: number): number {
    return (currentPage - 1) * ITEMS_PER_PAGE;
}

function convertRowToSchedule(row: QueryResultRow): Schedule {
    return {
        id: row["id"],
        date: row["date"],
        quota: row["quota"],
        members: row["schedule_member_count"]
    }
}