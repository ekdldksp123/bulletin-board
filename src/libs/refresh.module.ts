import { useRouter } from "next/router";

const router = useRouter();
export const refreshData = () => {
    router.replace(router.asPath);
}