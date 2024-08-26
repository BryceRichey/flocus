'use client'

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function ProfilePage() {
    const { user, isLoading } = useUser();
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <h1>Profile (client rendered)</h1>
            <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
        </>
    );
});