{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ microshift_short }} updates on an {{ op_system_ostree }} system {id="microshift-updates-rpms-ostree-con_{{ context }}"}

Updating {{ microshift_short }} on a {{ op_system_ostree_first }} system requires building a new {{ op_system_ostree }} image containing the new version of {{ microshift_short }} and any associated optional RPMs. {._abstract}

After you create the `rpm-ostree` image with {{ microshift_short }} embedded, you can boot into that operating system image.

The procedures are the same for minor-version and patch updates. For example, use the same steps to upgrade from 4.20 to 4.21 or from 4.21.2 to 4.21.3. The following details apply:

*   Back up and system rollback are automatic with this update type.
*   You can use the following workflow to update applications running in the {{ microshift_short }} node. Ensure compatibilities between the application and the adjacent versions of {{ microshift_short }} and {{ op_system_ostree }} before starting an update.
*   Downgrades other than automatic rollbacks are not supported. The following procedure is for updates only.

    :::important

    The steps you use depends on how your existing deployment is set up. The following procedure outlines the general steps you can take, with links to the {{ op_system_ostree }} documentation. The {{ op_system_ostree }} documentation is your resource for specific details on building an updated operating system image.
    
    :::