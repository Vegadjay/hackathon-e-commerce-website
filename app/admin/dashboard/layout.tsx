"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AdminLayout = ({ children }: { children: ReactNode }) => {
	const router = useRouter();
	const [isAuthorized, setIsAuthorized] = useState(false);

	useEffect(() => {
		const role = Cookies.get("role");

		if (role !== "webadmin") {
			router.replace("/");
		} else {
			setIsAuthorized(true);
		}
	}, [router]);

	if (!isAuthorized) return null;

	return <>{children}</>;
};

export default AdminLayout;
