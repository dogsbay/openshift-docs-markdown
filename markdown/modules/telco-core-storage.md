{%- set _mod_docs_content_type = "REFERENCE" %}
# Storage {id="telco-core-storage_{{ context }}"}

Cloud native storage services can be provided by {{ rh_storage }} or other third-party solutions for telco core clusters. {._abstract}


New in this release

:   *   There are no reference design updates in this release.

Description
:   Cloud native storage services can be provided by {{ rh_storage }} or other third-party solutions.


    {{ rh_storage }} is a Red Hat Ceph Storage based software-defined storage solution for containers.
    It provides block storage, file system storage, and on-premise object storage, which can be dynamically provisioned for both persistent and non-persistent data requirements.
    Telco core applications require persistent storage.


    :::note


    All storage data might not be encrypted in flight.
    To reduce risk, isolate the storage network from other cluster networks.
    The storage network must not be reachable, or routable, from other cluster networks.
    Only nodes directly attached to the storage network should be allowed to gain access to it.
    
    :::