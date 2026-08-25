---
title: Accessing the registry
---

# Accessing the registry {#accessing-the-registry}

\[role="\_abstract"\] You can access a registry to view logs and metrics. You can also secure and expose the registry.

After you logged in to the registry by using the `podman login` command, you can push or pull images from the integrated registry directly by using `podman push` or `podman pull` commands. The commands that you can use depend on your user permissions.

## Prerequisites {#_prerequisites}

- You have access to the cluster as a user with the `cluster-admin` role.
- You must have configured an identity provider (IDP).
- For pulling images, for example when using the `podman pull` command, the user must have the `registry-viewer` role. To add this role, run the following command:

  ```terminal
  $ oc policy add-role-to-user registry-viewer <user_name>
  ```
- For writing or pushing images, such as using `podman push` command, complete the following steps:

  - Your account has the `registry-editor` role. To add this role, run the following command:

    ```terminal
    $ oc policy add-role-to-user registry-editor <user_name>
    ```
  - Your cluster must have an existing project where the images can be pushed to.

## Additional resources {#accessing-the-registry-additional-resources}

- [Allowing pods to reference images across projects](/openshift_images/managing_images/using-image-pull-secrets#images-allow-pods-to-reference-images-across-projects_using-image-pull-secrets)
- [Removing the kubeadmin user](/authentication/remove-kubeadmin#removing-kubeadmin_removing-kubeadmin)
- [Understanding identity provider configuration](/authentication/understanding-identity-provider#understanding-identity-provider_understanding-identity-provider)
