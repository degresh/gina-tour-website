import { Transportation } from "@/app/lib/entity/transportation";
import { TransportationCreateRequest } from "@/app/lib/entity/transportation-create-request";
import { QueryResultRow, sql } from "@vercel/postgres";
import { encodeToBase64 } from "next/dist/build/webpack/loaders/utils";

const ITEMS_PER_PAGE: number = 10;

export async function createTransportation(request: TransportationCreateRequest) {
    try {
        await sql`
            INSERT INTO transportation (name, description, image_url)
            VALUES (${request.name}, ${request.description}, ${request.imageUrl})
        `;
        return true;
    } catch (error) {
        console.error("[TRANSPORTATION] Database Error", error);
        return false;
    }
}

export async function updateTransportationById(transportationId: number) {
    try {

    } catch (error) {
        console.error("[TRANSPORTATION] Database Error", error);
    }
}

export async function deleteTransportationById(transportationId: number) {
    try {

    } catch (error) {
        console.error("[TRANSPORTATION] Database Error", error);
    }
}

export async function getTransportations(keyword: string, page: number) {
    try {
        const query = await sql`
            SELECT * FROM transportation 
            WHERE name ILIKE ${`%${keyword}%`}
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset(page)}
        `;

        return query.rows.map(convertRowToTransportation);
    } catch (error) {
        console.error("[TRANSPORTATION] Database Error", error);
    }
}

export async function getTransportationPages(keyword: string): Promise<number> {
    try {
        const query = await sql`
            SELECT COUNT(*) FROM transportation 
            WHERE name ILIKE ${`%${keyword}%`}
        `;

        return Math.ceil(Number(query.rows[0].count) / ITEMS_PER_PAGE)
    } catch (error) {
        console.error("[TRANSPORTATION] Database Error", error);
    }
}

export async function getTransportationById(transportationId: number) {
    try {
        const query = await sql`
            SELECT * FROM transportation 
            WHERE id = ${transportationId}
            LIMIT 1
        `;

        return convertRowToTransportation(query.rows[0]);
    } catch (error) {
        console.error("[TRANSPORTATION] Database Error", error);
    }
}

/**
 * Internal methods
 */

function offset(currentPage: number): number {
    return (currentPage - 1) * ITEMS_PER_PAGE;
}

function convertRowToTransportation(row: QueryResultRow): Transportation {
    const transportation = new Transportation();

    transportation.id = row["id"];
    transportation.encodedId = encodeToBase64(transportation.id);
    transportation.name = row["name"];
    transportation.description = row["description"];
    transportation.imageUrl = row["image_url"];

    return transportation;
}