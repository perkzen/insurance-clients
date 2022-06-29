package services

import (
	"insurance-clients/pkg/dto"
	"insurance-clients/pkg/models"
	"insurance-clients/pkg/repository"
)

type UserService struct {
	repository *repository.UserRep
}

func NewClientService() *UserService {
	return &UserService{
		repository: repository.NewUserRepository(),
	}
}

func (s *UserService) GetOne(id uint) dto.Response {
	res := s.repository.FindOne(id)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "",
		Data:    res.Data,
	}
}

func (s *UserService) GetAll() dto.Response {
	res := s.repository.FindAll()

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "User found",
		Data:    res.Data,
	}
}

func (s *UserService) Create(user *models.User) dto.Response {
	res := s.repository.Save(user)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "New user created",
		Data:    res.Data,
	}
}

func (s *UserService) Update(id uint, data *models.User) dto.Response {
	res := s.repository.Update(id, data)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "User updated",
		Data:    res.Data,
	}
}

func (s *UserService) Delete(id uint) dto.Response {
	res := s.repository.Delete(id)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "User deleted",
		Data:    res.Data,
	}
}
