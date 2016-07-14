
export class ServiceAssemblyVersion {
    Major: number;
    Minor: number;
    Build: number;
    Revision: number;
    MajorRevision: number;
    MinorRevision: number;
}

export class LottoServeStatus {
    Healthy: boolean;
    LastHealthyTime: Date;
    HtmlFragment: string;
    ServiceAssemblyVersion: ServiceAssemblyVersion;
    ServiceBuildLabel: string;
    ServiceBuildDate: string;
    ErrorInfo: any;
    Success: boolean;
}