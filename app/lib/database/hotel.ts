import { Hotel } from "@/app/lib/entity/hotel";
import { HotelCreateRequest } from "@/app/lib/entity/hotel-create-request";
import { QueryResultRow, sql } from "@vercel/postgres";
import { encodeToBase64 } from "next/dist/build/webpack/loaders/utils";

const ITEMS_PER_PAGE: number = 10;

export async function createHotel(request: HotelCreateRequest) {
    try {
        await sql`
            INSERT INTO hotel (name, description, image_url, grade)
            VALUES (${request.name}, ${request.description}, ${request.imageUrl}, ${request.grade})
        `;
        return true;
    } catch (error) {
        console.error("[HOTEL] Database Error", error);
        return false;
    }
}

export async function updateHotelById(hotelId: number) {
    try {

    } catch (error) {
        console.error("[HOTEL] Database Error", error);
    }
}

export async function deleteHotelById(hotelId: number) {
    try {

    } catch (error) {
        console.error("[HOTEL] Database Error", error);
    }
}

export async function getHotels() {
    try {
        const query = await sql`
            SELECT * FROM hotel
        `;

        return query.rows.map(convertRowToHotel);
    } catch (error) {
        console.error("[HOTEL] Database Error", error);
    }
}

export async function getHotelCount() {
    try {
        const query = await sql`
            SELECT COUNT(*) FROM hotel
        `;

        return Number(query.rows[0].count);
    } catch (error) {
        console.error("[HOTEL] Database Error", error);
    }
}

export async function getPagedHotels(keyword: string, page: number) {
    try {
        const query = await sql`
            SELECT * FROM hotel 
            WHERE name ILIKE ${`%${keyword}%`}
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset(page)}
        `;

        return query.rows.map(convertRowToHotel);
    } catch (error) {
        console.error("[HOTEL] Database Error", error);
    }
}

export async function getHotelPages(keyword: string): Promise<number> {
    try {
        const query = await sql`
            SELECT COUNT(*) FROM hotel 
            WHERE name ILIKE ${`%${keyword}%`}
        `;

        return Math.ceil(Number(query.rows[0].count) / ITEMS_PER_PAGE)
    } catch (error) {
        console.error("[HOTEL] Database Error", error);
    }
}

export async function getHotelById(hotelId: number) {
    try {
        const query = await sql`
            SELECT * FROM hotel 
            WHERE id = ${hotelId}
            LIMIT 1
        `;

        return convertRowToHotel(query.rows[0]);
    } catch (error) {
        console.error("[HOTEL] Database Error", error);
    }
}

/**
 * Internal methods
 */

function offset(currentPage: number): number {
    return (currentPage - 1) * ITEMS_PER_PAGE;
}

function convertRowToHotel(row: QueryResultRow): Hotel {
    return {
        id: row["id"],
        encodedId: encodeToBase64(row["id"]),
        name: row["name"],
        description: row["description"],
        imageUrl: row["image_url"],
        grade: row["grade"],
    };
}