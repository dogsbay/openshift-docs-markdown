{%- set _mod_docs_content_type = "CONCEPT" %}
# Update existing Kubernetes storage objects {id="microshift-update-kubernetes-storage_{{ context }}"}

When you update {{ microshift_short }} to a new version, existing stored Kubernetes objects may need to be migrated to their latest API storage version. The storage version migration process updates the stored representation of resources to match the API version expected by the new release, ensuring that your cluster remains fully operational after the update. {._abstract}

To update existing objects to their latest version without recreating them, use storage version migration in {{ microshift_short }}. By creating a StorageVersionMigration custom resource (CR), you request the Kube Storage Version Migrator embedded controller to handle the transition automatically.

Either you or a controller can create a StorageVersionMigration custom resource (CR) that requests a migration through the Migrator Controller.