{%- set _mod_docs_content_type = "PROCEDURE" %}
# Allowing pods to reference images across projects {id="images-allow-pods-to-reference-images-across-projects_{{ context }}"}

To allow pods in one {{ product_title }} project to reference images from another project, you can bind a service account to the `system:image-puller` role in the target project. Use the `oc policy add-role-to-user` or `oc policy add-role-to-group` command to grant cross-project image access. {._abstract}


:::note

When you create a pod service account or a namespace, wait until the service account is provisioned with a Docker pull secret. If you create a pod before its service account is fully provisioned, the pod fails to access the {{ product_registry }}.

:::


**Procedure**

1.  Allow pods in `project-a` to reference images in `project-b` by entering the following command. In this example, the service account `default` in `project-a` is bound to the `system:image-puller` role in `project-b`:
    ```terminal
    $ oc policy add-role-to-user \
        system:image-puller system:serviceaccount:project-a:default \
        --namespace=project-b
    ```
1.  Optional: Allow access for any service account in `project-a` by using the `add-role-to-group` flag. For example:
    ```terminal
    $ oc policy add-role-to-group \
        system:image-puller system:serviceaccounts:project-a \
        --namespace=project-b
    ```