---
title: Working with projects
---

# Working with projects {#working-with-projects}

A *project* allows a community of users to organize and manage their content in isolation from other communities.

> [!NOTE]
> Projects starting with `openshift-` and `kube-` are default projects. For more information, see "Default projects".
>
> These projects host cluster components that run as pods and other infrastructure components. As such, OpenShift Container Platform does not allow you to create projects starting with `openshift-` or `kube-` using the `oc new-project` command. Cluster administrators can create these projects using the `oc adm new-project` command.

You can complete the following tasks on either the OpenShift Container Platform web console or the {{ oc_first }}:

- Create a project in your cluster.
- View a project.
- Check the status of a project.
- Delete a project.

> [!IMPORTANT]
> When you delete a project, the server updates the project status to **Terminating** from **Active**. The server then clears all content from a project that is in the **Terminating** state before finally removing the project. While a project is in **Terminating** status, you cannot add new content to the project.

**Additional resources**

- [Customizing the available cluster roles using the web console](/openshift-docs-markdown/applications/projects/working-with-projects#odc-customizing-available-cluster-roles-using-the-web-console_projects)

## Additional resources {#additional-resources_projects}

- [Default projects](/openshift-docs-markdown/authentication/using-rbac#rbac-default-projects_using-rbac)
