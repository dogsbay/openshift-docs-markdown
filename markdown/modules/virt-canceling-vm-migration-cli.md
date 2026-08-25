{%- set _mod_docs_content_type = "PROCEDURE" %}
# Canceling live migration by using the CLI {id="virt-canceling-vm-migration-cli_{{ context }}"}

Cancel the live migration of a virtual machine by deleting the
`VirtualMachineInstanceMigration` object associated with the migration. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have the `kubevirt.io:migrate` RBAC role or you are a cluster administrator.

**Procedure**

*   Delete the `VirtualMachineInstanceMigration` object that triggered the live
migration, `migration-job` in this example:
    ```terminal
    $ oc delete vmim migration-job
    ```