{%- set _mod_docs_content_type = "PROCEDURE" %}
# Limit range operations {id="admin-limit-operations_{{ context }}"}

You can create, view, and delete limit ranges in a project. {._abstract}

You can view any limit ranges that are defined in a project by navigating in the web console to the **Quota** page for the project. You can also use the CLI to view limit range details.

**Procedure**

*   To create the object, enter the following command:
    ```terminal
    $ oc create -f <limit_range_file> -n <project>
    ```
*   To view the list of limit range objects that exist in a project, enter the following command:
    ```terminal title="Example command with a project called demoproject"
    $ oc get limits -n demoproject
    ```
    ```terminal title="Example output"
    NAME              AGE
    resource-limits   6d
    ```
*   To describe a limit range, enter the following command:
    ```terminal title="Example command with a limit range called resource-limits"
    $ oc describe limits resource-limits -n demoproject
    ```
    ```terminal title="Example output"
    Name:                           resource-limits
    Namespace:                      demoproject
    Type                            Resource                Min     Max     Default Request Default Limit   Max Limit/Request Ratio
    ----                            --------                ---     ---     --------------- -------------   -----------------------
    Pod                             cpu                     200m    2       -               -               -
    Pod                             memory                  6Mi     1Gi     -               -               -
    Container                       cpu                     100m    2       200m            300m            10
    Container                       memory                  4Mi     1Gi     100Mi           200Mi           -
    openshift.io/Image              storage                 -       1Gi     -               -               -
    openshift.io/ImageStream        openshift.io/image      -       12      -               -               -
    openshift.io/ImageStream        openshift.io/image-tags -       10      -               -               -
    ```
*   To delete a limit range, enter the following command:
    ```terminal
    $ oc delete limits <limit_name>
    ```