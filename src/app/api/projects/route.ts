import { NextResponse } from 'next/server';
import { allProjects } from '@/constants/projects';
import { withCors } from '@/lib/cors';

const handler = async () => {
  try {
    const getAllProjects = allProjects.sort((a, b) => b.position - a.position);

    const latestProjects = getAllProjects
      .slice(0, 5)
      .map(({ id, name, description, category, tags, image, source_code_link, live_url }) => ({
        id,
        name,
        description,
        category,
        tags,
        image,
        sourceCodeLink: source_code_link,
        liveUrl: live_url,
        projectUrl: `https://apps.hemanthbabu648.com/projects/${id}`,
      }));
    return NextResponse.json({
      data: {
        projects: latestProjects,
        total: allProjects.length,
        count: latestProjects.length,
      },
      message: 'Projects fetched successfully',
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error,
      message: 'Failed to fetch projects',
      status: 500,
    });
  }
};

export const GET = withCors(handler);
