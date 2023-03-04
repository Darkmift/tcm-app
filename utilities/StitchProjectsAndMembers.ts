export default function StitchProjectsAndMembers({
  projects,
  members,
  relation_object,
}: {
  projects: any[]
  members: any[]
  relation_object: any[]
}) {
  // Build up a map of project IDs to their related members
  const projectMembersMap: any = {}
  for (const {projectId, memberId} of relation_object) {
    if (!projectMembersMap[projectId]) {
      projectMembersMap[projectId] = []
    }
    projectMembersMap[projectId].push(memberId)
  }

  // Build up a map of member IDs to their related projects
  const memberProjectsMap: any = {}
  for (const {projectId, memberId} of relation_object) {
    if (!memberProjectsMap[memberId]) {
      memberProjectsMap[memberId] = []
    }
    memberProjectsMap[memberId].push(projectId)
  }

  // Populate each project with its related members
  for (const project of projects) {
    const memberIds = projectMembersMap[project.id] || []
    project.members = members.filter((member) => memberIds.includes(member.id))
  }

  // Populate each member with its related projects
  for (const member of members) {
    const projectIds = memberProjectsMap[member.id] || []
    member.projects = projects.filter((project) =>
      projectIds.includes(project.id)
    )
  }

  return {members, projects}
}
