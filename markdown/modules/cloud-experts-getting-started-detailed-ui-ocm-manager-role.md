{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating an {{ cluster_manager }} user role {id="cloud-experts-getting-started-detailed-ui-ocm-manager-role_{{ context }}"}

The user role needs to be created so that {{ product_title }} can verify your AWS identity. This role has no permissions, and it is only used to create a trust relationship between the installation program account and your {{ cluster_manager }} role resources. For more information, see the user role documentation in _Additional resources_. {._abstract}

**Procedure**

1.  Check if a user role already exists by running the following command:
    ```terminal
    $ rosa list user-role
    ```
1.  Run the following command to create the user role and to link it to your Red&#160;Hat account:
    ```terminal
    $ rosa create user-role --mode auto --yes
    ```

    **Example output**
    ```terminal
    I: Creating User role
    I: Creating ocm user role using 'arn:aws:iam::000000000000:user/rosa-user'
    I: Created role 'ManagedOpenShift-User-rosa-user-Role' with ARN 'arn:aws:iam::000000000000:role/ManagedOpenShift-User-rosa-user-Role'
    I: Linking User role
    I: Successfully linked role ARN 'arn:aws:iam::000000000000:role/ManagedOpenShift-User-rosa-user-Role' with account '1rbOQez0z5j1YolInhcXY000000'
    ```

    :::note

    As before, you can define `--mode manual` if you’d prefer to run the AWS CLI commands yourself. The CLI outputs the AWS commands and the relevant JSON files are created in the current directory. Make sure to link the role.
    
    :::

1.  Click **Step 3: Account roles**.