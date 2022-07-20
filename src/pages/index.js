import Link from 'next/link';
import React from 'react';

const Index = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <Link href={`/blogs`}>
              <a>Blogs</a>
            </Link>
        </div>
    );
}

export default Index;
