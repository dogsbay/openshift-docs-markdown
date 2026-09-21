{%- set _mod_docs_content_type = "CONCEPT" %}
# About storage class migration {id="virt-about-storage-class-migration_{{ context }}"}

A persistent volume claim (PVC) requests storage with specific attributes, such as size and performance, defined by its storage class. You cannot change a PVC’s storage class after you create it. {._abstract}

The storage backend that provisioned the original PVC holds the VM’s data. The target storage class might use a different backend, which does not have that data until you migrate it there.

To move a VM disk to a new storage class, you create a migration plan. The migration plan creates a new PVC in the target storage class and copies the data from the original PVC to the new PVC.