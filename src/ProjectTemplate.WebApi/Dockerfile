FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["ProjectTemplate.WebApi/ProjectTemplate.WebApi.csproj", "ProjectTemplate.WebApi/"]
RUN dotnet restore "ProjectTemplate.WebApi/ProjectTemplate.WebApi.csproj"
COPY . .
WORKDIR "/src/ProjectTemplate.WebApi"
RUN dotnet build "ProjectTemplate.WebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ProjectTemplate.WebApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProjectTemplate.WebApi.dll"]
